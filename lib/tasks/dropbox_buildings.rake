require 'csv'
require_relative '../dropboxAPI'


module DropboxBuildings
  def self.split_roomcode(room_code)
      # See comment below about "Ruby multiple assignment"
      building_no, building_name, floor, room_no = room_code.split('-')
      return { 
              building_no: building_no, 
              building_name: building_name,
              floor: floor,
              room_no: room_no
            }
  end

  # Creating empty array in order to save room_codes
  @building_codes = []

  def self.populate_buildings(buildings)

    # Obtaining the first hash since that have all the room_codes that we need
    buildings_object = buildings[0]

    # Converting the hash to an array that contains only the keys and 
    # removing off the first two keys (Date & Time)
    buildings_data = buildings_object.keys[2..-1]

    buildings_data.each do |building|

      #Obtaining all the separate room_codes in the form of a hash
      #{building_no: 0516, building_name: IBLC, floor: 02, room_no:0101}
      room_codes = split_roomcode(building)

      @building_codes << building

      # creates a building if one does not already exist (Active Record Validation)
        Building.create({
          building_number: room_codes[:building_no],
          building_name: room_codes[:building_name]
        })
    end 
  end

  def self.populate_rooms()

    @building_codes.each do |room_codes|

      room_codes_hash = split_roomcode(room_codes)

      # room_exists = Building.find_by_building_number(room_codes_hash[:building_no])

      building = Building.find_by_building_number(room_codes_hash[:building_no])

      building.rooms.create({
        floor: room_codes_hash[:floor], 
        room: room_codes_hash[:room_no], 
        room_code: room_codes
      })

    end

  end

  def self.populate_occupants(buildings)
    date_time = nil

    buildings.each do |building|
      # Setting the DateTime
      date = building["Date"]
      time = building["Time"]
      date_time = (date + ' ' + time).to_datetime.strftime("20%y-%m-%dT%H:%M:%S")

      # Obtaining only the keys we need
      buildings_data = building.keys[2..-1]

      # Loop through to room_codes
      buildings_data.each do |room_code|

        number_occupants = building[room_code]
        # Returning a hash of all the room codes
        room_codes_hash = split_roomcode(room_code)

        buildingObj = Building.find_by(building_name: room_codes_hash[:building_name])

        unless buildingObj.nil?
          # Obtaining the room number from the room codes hash
          room = buildingObj.rooms.find_by_room(room_codes_hash[:room_no])
          #<Room id: 6, building_id: 24, floor: 2, room: nil, room_code: "0516-IBLC-02-0101", created_at: "2016-04-21 03:24:08", updated_at: "2016-04-21 03:24:08">
          
          # Does not currently create occupants if the room already exits. See DMP-Hugh-2
          if !room.nil?
            room.occupants.create({
              sample_time: date_time,
              number_occupants: number_occupants
              })
          end
        end
      end

    end

  end

  def self.populate_courses_room_id()

    # 1. Iterate through each course 
    Course.all.each do |course|
      # 2. Find the building where the course is taking place. Building has to exist in the database
      building = Building.find_by(building_name: course.building)
      unless building.nil?
        # 3. Go through the rooms of that building and find the room by the room code
        room = building.rooms.find_by(room: course.room_code)
        unless room.nil?
          # 4. Room found!! add room id to course so you can have course.room accessible
          course.update(room_id: room.id) 
          # room.update(capacity: course.capacity)
        else
          # puts "#{course.room_code} not found!"
        end
      # else
      #   puts "building: #{course.building} not found."
      end
    end

  end
end


namespace :csv do
  desc "Import CSV Data occupant data"
  task :dropboxb => :environment do
    dbu = DropboxUtility.new(ENV['DROPBOX_ACCESS_TOKEN'])
    dbu.changed_files(ENV['DROPBOX_OCCUPANCY_PATH']).each do |path|
    # turns the csv object to array of hashes to make it easier to parse
      buildings = []
      CSV.parse(path, headers: true) do |row|
        buildings << row.to_hash
        # example row:
        # {"Date"=>"16-01-05", "Time"=>"0:00:00", "0516-IBLC-02-0101"=>"1", "0403-CIRS-02-0203"=>"1"}
      end

      DropboxBuildings.populate_buildings(buildings)
      DropboxBuildings.populate_rooms()
      DropboxBuildings.populate_occupants(buildings)
      DropboxBuildings.populate_courses_room_id()

    end
  end
end

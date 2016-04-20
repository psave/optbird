require 'csv'

namespace :csv do
  desc "Import CSV Data occupant data"
  task :buildings => :environment do
    csv_file_path = 'db/confidential/multi_room_sample_duplicates.csv'
    #setting first_row (flag) to true to be able to parse header
    first_row = true
    #initializing room object to gather data for occupants table.
    column_to_room = []
    CSV.foreach(csv_file_path) do |row|
      # count the number of the rows.
      number_columns = row.length - 1
      if first_row    
        #check if row[2] (building code) is already in database
        for current_column in 2..number_columns
          #spliting the column header into array for parsing.
          fields = row[current_column].split('-')
          building_no = fields[0]
          building_name = fields[1]
          floor = fields[2]
          room_no = fields[3]

          #assigning either building_no OR nil to building
          building = Building.where("building_number = ?", building_no).first
          #if the "building_no" does not exist, then create a new record
          if !building
            building = Building.create!({
              building_number: building_no,
              building_name: building_name
            })
          end

          # assigning either "room_code" OR nil to room
          room = Room.where("room_code = ?", row[current_column]).first
          # if the "room_code" does not exist, then create a new one.
          if !room
            room = Room.create!({
              building_id: building.id,
              floor: floor,
              room: room_no,
              room_code: row[current_column]
            })
          end
          #im creating a hash called column_to_room, so i can lookup a room based on the column id
          column_to_room[current_column] = room

        end # for current_column statement
      first_row = false
      else
        for current_column in 2..number_columns

          #assigning the variable room_obj to be able to look up the id on this object after
          room_obj = column_to_room[current_column]
          date_time = (row[0] + ' ' + row[1]).to_datetime.strftime("20%y-%m-%dT%H:%M:%S")

          # Create a new occupant record if the matching date_time and room_id: does not exist
          Occupant.where(sample_time: date_time, room_id: room_obj.id).first_or_create!({
            # sample_time: (row[0] + ' ' + row[1]).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
            sample_time: date_time,
            number_occupants: row[current_column],
            room_id: room_obj.id
            })
        end # for current_column for statement
      end # for if first_row statement
    end #end fo CSV.foreach loop
    #for assigning room ids to the nil records in the courses table
    # @courses = Course.where("room_id is null")
    # @courses.each do |row|
    #   puts row[:building]
    #   puts row[:room_code]
    #   @room = Room.where("room_code like ? or room_code like ?",'%row[:building]%','%row[:room_code]%')
    #   puts @room.count
    # end #end for courses each do
  end #end for task
end #namespace end
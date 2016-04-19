require 'csv'

namespace :csv do
  desc "Import CSV Data occupant data"
  task :buildings => :environment do
    csv_file_path = 'db/confidential/multi_room_sample.csv'
    #setting first_row (flag) to true to be able to parse header
    first_row = true
    #initializing room object to gather data for occupants table.
    column_to_room = []
    CSV.foreach(csv_file_path) do |row|
      # count the number of the rows.
      number_columns = row.length - 1
      if first_row    
        #check if row[2] (building code) is already in database
        for i in 2..number_columns
          #spliting the column header into array for parsing.
          fields = row[i].split('-')
          building_no = fields[0]
          building_name = fields[1]
          floor = fields[2]
          room_no = fields[3]

          #assigning either building_no OR nil to building
          building = Building.where("building_number = ?", building_no).first
          #if the "building_no" does not exist
          if !building
            building = Building.create!({
              building_number: building_no,
              building_name: building_name
            })
          end

          # assigning either "room_code" OR nil to room
          room = Room.where("room_code = ?", row[i]).first
          # if the "room_code" does not exist
          if !room
            room = Room.create!({
              building_id: building.id,
              floor: floor,
              room: room_no,
              room_code: row[i]
            })
          end
          column_to_room[i] = room

        end # for for statement
      first_row = false
      else
        # other rows
        for i in 2..number_columns
          room_obj = column_to_room[i]
          Occupant.create!({
            sample_time: (row[0] + ' ' + row[1]).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
            number_occupants: row[i],
            room_id: room_obj.id
            })
        end # for for statement
      end # for if statement
    end #end fo CSV.foreach loop
  end #end for task
end #namespace end
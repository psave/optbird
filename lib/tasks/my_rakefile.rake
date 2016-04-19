# require 'csv'

# namespace :csv do
#   desc "Import CSV Data  occupant data"
#   task :taskname => :environment do
#     csv_file_path = 'db/confidential/IBLC182.csv'
#     CSV.foreach(csv_file_path) do |row|
#       next if row == ["Date", "Time", "Room 182"]
# #ignore some straggling data and blank spaces in the file
#         Occupant.create!({
#           sampletime: (row[0] + ' ' + row[1]).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
#           number_occupants: row[2],
#           building_number: "403",
#           building_name: "LSBC",
#           room_number: "182"
#         })
#     end #end fo CSV.foreach loop
#   end #end for task
# end #namespace end


# #######################################################


# csv_file_path = 'db/confidential/IBLC182.csv'
#     CSV.foreach(csv_file_path) do |row|
#       next if row == ["Date", "Time", "Room 182"]
# #ignore some straggling data and blank spaces in the file
#         Occupant.create!({
#           :date => row[0],
#           :time => row[1],
#           :number_occupants => row[2]
#         })
#     end #end fo CSV.foreach loop

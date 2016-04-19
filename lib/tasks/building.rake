require 'csv'

# namespace :csv do
#   desc "Import CSV Data occupant data"
#   task :buildings => :environment do
#     csv_file_path = 'db/confidential/multi_room_sample.csv'
#     CSV.foreach(csv_file_path) do |row|
#       # count the number of the rows.
#       number_columns = row.length
#       #check if row[2] (building code) is already in database
#       fields = row[i].split('-')
#       building_no = fields[0]
#       building_name = fields[1]

#       next if row == ["Date", "Time"]
# #ignore some straggling data and blank spaces in the file
#         Building.create!({
#           building_number: (row[0] + ' ' + row[1]).to_datetime.strftime("%Y-%m-%dT%H:%M:%S"),
#           building_name: row[2]
#         })
#     end #end fo CSV.foreach loop
#   end #end for task
# end #namespace end
require 'csv'

namespace :csv do
  desc "Import CSV Data  occupant data"
  task :taskname => :environment do
    csv_file_path = 'db/confidential/IBLC182.csv'
    CSV.foreach(csv_file_path) do |row|
      next if row == ["Date", "Time", "Room 182"]
#ignore some straggling data and blank spaces in the file
        Occupant.create!({
          :date => row[0],
          :time => row[1],
          :number_occupants => row[2]
        })
    end #end fo CSV.foreach loop
  end #end for task



end #namespace end


# incomingDate = dec;
# newDate = parse(incomingDate); # Decmber
# normalisedTime = parse(incomingTime);
# template = "#{newDate} - #{normalisedTime}"
# Date.new(template)

# namespace :csv do
#   desc "Import CSV Data  occupant data"
#   task :taskname => :environment do
#     csv_file_path = 'db/confidential/IBLC182.csv'
#     CSV.foreach(csv_file_path) do |row|
#       binding.pry

#       next if row > 2
# #ignore some straggling data and blank spaces in the file
#         Occupant.create!({
#           :date => row[0],
#           :time => row[1],
#           :number_occupants => row[2]
#         })
#       end
#     end #end fo CSV.foreach loop
#   end #end for task
# end #namespace end


>>>>>>> master

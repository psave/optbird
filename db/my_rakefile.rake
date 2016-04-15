require 'csv'

namespace :csv do
  desc "Import CSV Data  occupant data"
  task :taskname => :environment do
    csv_file_path = 'db/confidential/IKB182.csv'
    CSV.foreach(csv_file_path) do |row|
      if row.length > 2
#ignore some straggling data and blank spaces in the file
        Occupant.create!({
          :date => row[0],
          :time => row[1],
          :number_occupants => row[2]
        })
      end  #end for if
    end #end fo CSV.foreach loop
  end #end for task
end #namespace end
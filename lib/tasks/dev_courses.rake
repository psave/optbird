require 'csv'

namespace :csv do
  desc "Import CSV Data course data"
  task :devcourses => :environment do
    csv_file_path = 'db/confidential/all_courses2015.csv'
    CSV.foreach(csv_file_path, headers: true) do |row|
    
      unless row[9].nil? && row[20].nil?

        row[9].split("").each do |day|
          Course.create!({
            subject: row[0],
            course: row[1],
            crs_dtl_cd: row[2],
            sec_no: row[3],
            crs_credit: row[4],
            sec_trm_cd: row[5],
            meeting_type: row[6],
            sec_actv_no: row[7],
            sec_num_linked_actv: row[8],
            daysmet: day,
            start_time: (DateTime.parse(row[10]).strftime("%H:%M") unless row[10].nil?),
            end_time: (DateTime.parse(row[11]).strftime("%H:%M") unless row[11].nil?),
            start_date: row[12],
            end_date: row[13],
            sec_rel_tot: row[14],
            sec_enr_tot: row[15],
            max_enrollment: row[16],
            instructor_names: row[17],
            short_title: row[18],
            long_title: row[19],
            building: row[20],
            room_code: row[21],
            capacity: row[22],
            sec_publ_fl: row[23],
            sec_ses_yr: row[24],
            sec_ses_cd: row[25],
            admin_campus_cd: row[26],
            sec_typ_cd: row[27],
            registration_status: row[28],
            section_status: row[29],
            activity_status: row[30],
            cross_listed: row[31]
          })
        end # .each do
      end # unless
    end # CSV.foreach loop
  end # task
end # namespace
require 'csv'
require 'date'
require_relative '../dropboxAPI'

namespace :csv do
  desc "Import CSV Data course data"
  task :dropboxc => :environment do
    dbu = DropboxUtility.new(ENV['DROPBOX_ACCESS_TOKEN'])
    dbu.changed_files(ENV['DROPBOX_COURSES_PATH']).each do |path|
      CSV.parse(path, headers: true) do |row|
        # && Date.parse(row[12]) > Date.parse("01/01/2016")
        if !row[9].nil? && !row[20].nil? && !row[10].nil? && !row[11].nil? && !row[12].nil? && (Date.strptime(row[12],"%m/%d/%Y") > Date.parse("01/01/2016"))
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
              start_time: DateTime.parse(row[10]).strftime("%H:%M"),
              end_time: DateTime.parse(row[11]).strftime("%H:%M"),
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
        end # if day.length
      end # CSV.foreach loop
    end
  end # task
end # namespace
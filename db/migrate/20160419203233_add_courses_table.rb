class AddCoursesTable < ActiveRecord::Migration
  def change

    create_table :courses do |t|

      t.references :room, index: true

      t.string :subject
      t.string :course
      t.string :crs_dtl_cd
      t.string :sec_no
      t.string :crs_credit
      t.string :sec_trm_cd
      t.string :meeting_type
      t.string :sec_actv_no
      t.string :sec_num_linked_actv
      t.string :daysmet
      t.string :start_time
      t.string :end_time
      t.string :start_date
      t.string :end_date
      t.integer :sec_rel_tot
      t.integer :sec_enr_tot
      t.integer :max_enrollment
      t.string :instructor_names
      t.string :short_title
      t.string :long_title
      t.string :building
      t.string :room
      t.integer :capacity
      t.string :sec_publ_fl
      t.string :sec_ses_yr
      t.string :sec_ses_cd
      t.string :admin_campus_cd
      t.string :sec_typ_cd
      t.string :registration_status
      t.string :section_status
      t.string :activity_status
      t.string :cross_listed

      t.timestamps

    end
  end
end

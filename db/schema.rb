# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160419203233) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "buildings", force: :cascade do |t|
    t.integer  "building_number"
    t.string   "building_name",   limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "courses", force: :cascade do |t|
    t.integer  "room_id"
    t.string   "subject"
    t.string   "course"
    t.string   "crs_dtl_cd"
    t.string   "sec_no"
    t.string   "crs_credit"
    t.string   "sec_trm_cd"
    t.string   "meeting_type"
    t.string   "sec_actv_no"
    t.string   "sec_num_linked_actv"
    t.string   "daysmet"
    t.string   "start_time"
    t.string   "end_time"
    t.string   "start_date"
    t.string   "end_date"
    t.integer  "sec_rel_tot"
    t.integer  "sec_enr_tot"
    t.integer  "max_enrollment"
    t.text     "instructor_names"
    t.string   "short_title"
    t.string   "long_title"
    t.string   "building"
    t.string   "room_code"
    t.integer  "capacity"
    t.string   "sec_publ_fl"
    t.string   "sec_ses_yr"
    t.string   "sec_ses_cd"
    t.string   "admin_campus_cd"
    t.string   "sec_typ_cd"
    t.string   "registration_status"
    t.string   "section_status"
    t.string   "activity_status"
    t.string   "cross_listed"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "courses", ["room_id"], name: "index_courses_on_room_id", using: :btree

  create_table "occupants", force: :cascade do |t|
    t.string   "sample_time",      limit: 255
    t.integer  "number_occupants"
    t.integer  "room_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "occupants", ["room_id"], name: "index_occupants_on_room_id", using: :btree

  create_table "rooms", force: :cascade do |t|
    t.integer  "building_id"
    t.integer  "floor"
    t.string   "room",        limit: 255
    t.string   "room_code",   limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rooms", ["building_id"], name: "index_rooms_on_building_id", using: :btree
  add_index "rooms", ["room_code"], name: "index_rooms_on_room_code", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",            limit: 255
    t.string   "password_digest", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

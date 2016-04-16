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

ActiveRecord::Schema.define(version: 20160416052043) do

  create_table "populates", force: true do |t|
    t.string   "date_time"
    t.integer  "occupants"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "password_digest"

ActiveRecord::Schema.define(version: 20160414200100) do

  create_table "occupants", force: true do |t|
    t.date     "date"
    t.time     "time"
    t.integer  "building_number"
    t.string   "building_name"
    t.string   "room_number"
    t.integer  "number_occupants"
>>>>>>> 0320bf1d484c4747bbe2b4c668b7a90fcc819479
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

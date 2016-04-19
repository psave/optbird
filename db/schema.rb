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


ActiveRecord::Schema.define(version: 20160418234141) do


  create_table "buildings", force: true do |t|
    t.integer  "building_number"
    t.string   "building_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "occupants", force: true do |t|
    t.string   "sample_time"
    t.integer  "number_occupants"
    t.integer  "room_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "occupants", ["room_id"], name: "index_occupants_on_room_id", using: :btree

  create_table "populates", force: true do |t|
    t.string   "date_time"
    t.integer  "occupants"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rooms", force: true do |t|
    t.integer  "building_id"
    t.integer  "floor"
    t.string   "room"
    t.string   "room_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rooms", ["building_id"], name: "index_rooms_on_building_id", using: :btree
  add_index "rooms", ["room_code"], name: "index_rooms_on_room_code", using: :btree

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

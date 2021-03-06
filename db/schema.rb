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

ActiveRecord::Schema.define(version: 2018_06_05_220542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "guests", null: false
    t.integer "booker_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["booker_id"], name: "index_bookings_on_booker_id"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
    t.index ["start_date", "end_date"], name: "index_bookings_on_start_date_and_end_date"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "body"
    t.integer "reviewer_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
    t.index ["spot_id"], name: "index_reviews_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "name", null: false
    t.string "image_url", null: false
    t.string "location", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "landscape", null: false
    t.integer "size", null: false
    t.integer "price", null: false
    t.text "description"
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_spots_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "image_url"
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_05_212906) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "timescaledb"

  create_table "job_applications", force: :cascade do |t|
    t.string "resume_url"
    t.string "cover_letter_url"
    t.boolean "accepted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.date "date"
    t.string "location"
    t.integer "budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "musician_profiles", force: :cascade do |t|
    t.string "location"
    t.string "instrument"
    t.text "bio"
    t.string "media_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "musician_id"
    t.index ["musician_id"], name: "index_musician_profiles_on_musician_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

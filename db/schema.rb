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

ActiveRecord::Schema[7.0].define(version: 2022_10_26_034921) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "timescaledb"

  create_table "application_responses", force: :cascade do |t|
    t.string "status"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "job_application_id"
    t.index ["job_application_id"], name: "index_application_responses_on_job_application_id"
  end

  create_table "job_applications", force: :cascade do |t|
    t.text "cover_letter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "musician_id"
    t.bigint "job_id", null: false
    t.index ["job_id"], name: "index_job_applications_on_job_id"
    t.index ["musician_id"], name: "index_job_applications_on_musician_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.date "date"
    t.string "location"
    t.integer "budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "contractor_id"
    t.index ["contractor_id"], name: "index_jobs_on_contractor_id"
  end

  create_table "musician_profiles", force: :cascade do |t|
    t.string "location"
    t.string "instrument"
    t.text "bio"
    t.string "media_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "musician_id"
    t.string "email"
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

  add_foreign_key "application_responses", "job_applications"
  add_foreign_key "job_applications", "jobs"
  add_foreign_key "job_applications", "users", column: "musician_id"
  add_foreign_key "jobs", "users", column: "contractor_id"
  add_foreign_key "musician_profiles", "users", column: "musician_id"
end

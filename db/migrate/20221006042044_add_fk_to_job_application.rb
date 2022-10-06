class AddFkToJobApplication < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :job_applications, :users, column: :musician_id
  end
end

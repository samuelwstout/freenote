class AddFktoJobs < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :jobs, :users, column: :contractor_id
  end
end

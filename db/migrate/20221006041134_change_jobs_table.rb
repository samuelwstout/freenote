class ChangeJobsTable < ActiveRecord::Migration[7.0]
  def change
    change_table :jobs do |t|
      t.references :contractor, references: :users
    end
  end
end

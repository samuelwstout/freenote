class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.date :date
      t.string :location
      t.integer :budget

      t.timestamps
    end
  end
end

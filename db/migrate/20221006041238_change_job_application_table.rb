class ChangeJobApplicationTable < ActiveRecord::Migration[7.0]
  def change
    change_table :job_applications do |t|
      t.references :musician, references: :users
    end
  end
end

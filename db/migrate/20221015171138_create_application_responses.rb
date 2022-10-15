class CreateApplicationResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :application_responses do |t|
      t.text :status
      t.text :comment

      t.timestamps
    end
  end
end

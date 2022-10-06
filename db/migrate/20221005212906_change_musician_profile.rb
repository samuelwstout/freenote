class ChangeMusicianProfile < ActiveRecord::Migration[7.0]
  def change
    change_table :musician_profiles do |t|
      t.references :musician, references: :users
    end
  end
end

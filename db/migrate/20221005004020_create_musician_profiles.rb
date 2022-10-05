class CreateMusicianProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :musician_profiles do |t|
      t.string :location
      t.string :instrument
      t.text :bio
      t.string :media_url

      t.timestamps
    end
  end
end

class AddFkToMusicianProfile < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :musician_profiles, :users, column: :musician_id
  end
end

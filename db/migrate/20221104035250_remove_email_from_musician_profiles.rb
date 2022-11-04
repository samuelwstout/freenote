class RemoveEmailFromMusicianProfiles < ActiveRecord::Migration[7.0]
  def change
    remove_column :musician_profiles, :email
  end
end

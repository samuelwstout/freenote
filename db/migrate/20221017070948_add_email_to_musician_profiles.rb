class AddEmailToMusicianProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :musician_profiles, :email, :string
  end
end

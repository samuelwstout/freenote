class AddResumeToMusicianProfile < ActiveRecord::Migration[7.0]
  def change
    add_column :musician_profiles, :resume, :string
  end
end

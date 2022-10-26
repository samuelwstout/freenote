class RemoveResume < ActiveRecord::Migration[7.0]
  def change
    remove_column :musician_profiles, :resume
  end
end

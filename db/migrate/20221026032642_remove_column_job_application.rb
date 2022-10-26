class RemoveColumnJobApplication < ActiveRecord::Migration[7.0]
  def change
    remove_column :job_applications, :resume
  end
end

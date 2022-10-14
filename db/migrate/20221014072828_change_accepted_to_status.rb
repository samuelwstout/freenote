class ChangeAcceptedToStatus < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_applications, :accepted, :status
  end
end

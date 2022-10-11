class ChangeColumnNameJobApplications < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_applications, :resume_url, :resume
  end
end

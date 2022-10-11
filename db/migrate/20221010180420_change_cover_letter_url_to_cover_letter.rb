class ChangeCoverLetterUrlToCoverLetter < ActiveRecord::Migration[7.0]
  def change
    rename_column :job_applications, :cover_letter_url, :cover_letter
  end
end

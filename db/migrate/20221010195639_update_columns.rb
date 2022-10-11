class UpdateColumns < ActiveRecord::Migration[7.0]
  def change
    change_table :job_applications do |t|
      t.change :resume, :text
      t.change :cover_letter, :text
    end
  end
end

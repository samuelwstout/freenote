class ChangeStatusDataType < ActiveRecord::Migration[7.0]
  def change
    change_table :job_applications do |t|
      t.change :status, :string
    end
  end
end

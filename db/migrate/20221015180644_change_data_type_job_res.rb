class ChangeDataTypeJobRes < ActiveRecord::Migration[7.0]
  def change
    change_table :application_responses do |t|
      t.change :status, :string
    end
  end
end

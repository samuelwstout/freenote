class RemoveComment < ActiveRecord::Migration[7.0]
  def change
    remove_column :application_responses, :comment
  end
end

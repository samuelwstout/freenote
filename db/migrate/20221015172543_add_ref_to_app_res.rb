class AddRefToAppRes < ActiveRecord::Migration[7.0]
  def change
    add_reference :application_responses, :job_application, foreign_key: true
  end
end

class Job < ApplicationRecord
    belongs_to :contractor
    has_many :job_applications
    has_many :musicians, through: :job_applications
end

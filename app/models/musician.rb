class Musician < User
    has_many :job_applications, dependent: :destroy
    has_many :jobs, through: :job_applications
    has_one :musician_profile, dependent: :destroy
end
class Musician < User
    has_many :job_applications
    has_many :jobs, through: :job_applications
    has_one :musician_profile
end
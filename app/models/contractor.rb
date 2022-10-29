class Contractor < User
    has_many :jobs, dependent: :destroy
 end
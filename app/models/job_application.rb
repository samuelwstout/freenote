class JobApplication < ApplicationRecord
    belongs_to :job
    belongs_to :musician
    has_one :application_response, dependent: :destroy
end

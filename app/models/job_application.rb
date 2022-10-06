class JobApplication < ApplicationRecord
    belongs_to :job
    belongs_to :musician
end

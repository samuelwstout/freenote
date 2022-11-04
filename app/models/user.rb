class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    def as_json(options={})
        super(options.merge({ methods: :type }))
    end

end

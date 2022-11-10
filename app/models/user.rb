class User < ApplicationRecord
    
    has_secure_password
    validates :password, length: { minimum: 5, wrong_length: "Password must be at least 5 characters." }, if: :password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    def as_json(options={})
        super(options.merge({ methods: :type }))
    end

    def send_password_reset
        self.password_reset_token = generate_base64_token
        self.password_reset_sent_at = Time.zone.now
        save!
        UserMailer.password_reset(self).deliver_now
    end
    
    def password_token_valid?
        (self.password_reset_sent_at + 1.hour) > Time.zone.now
    end

    def reset_password(password)
        self.password_reset_token = nil
        self.password = password
        save!
    end

    def send_email_confirmation
        self.confirm_token = generate_base64_token
        save!
        UserMailer.registration_confirmation(self).deliver_now
    end

    private

    def generate_base64_token
        test = SecureRandom.urlsafe_base64
    end

end

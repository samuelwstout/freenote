class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    def as_json(options={})
        super(options.merge({ methods: :type }))
    end

    # sends an email with a link for the user to reset password
    def send_password_reset
        generate_token(:password_reset_token)
        self.password_reset_sent_at = Time.zone.now
        save!
        UserMailer.forgot_password(self).deliver
    end

    # generates random password reset token
    def generate_token(column)
        begin
            self[column] = SecureRandom.urlsafe_base64
        end while User.exists?(column => self[column])
    end

end

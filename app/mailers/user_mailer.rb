class UserMailer < ApplicationMailer

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Password reset - Freenote"
  end

  def email_confirmation(user)
    @user = user
    mail to: user.email, subject: "Email confirmation - Freenote"
  end

end

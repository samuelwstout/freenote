class UserMailer < ApplicationMailer

  def registration_confirmation(user)
    @user = user
    mail :to => user.email, :subject => "Registration Confirmation - Freenote"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Password reset - Freenote"
  end

end

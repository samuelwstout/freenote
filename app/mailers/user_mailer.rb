class UserMailer < ApplicationMailer

  def welcome_email
    @user = params[:user]
    @url  = 'https://freenote.up.railway.app'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

end

class HomepageController < ApplicationController
  skip_before_action :confirm_authentication

  def index
  end

end

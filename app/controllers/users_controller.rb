class UsersController < ApplicationController
  def login
  end

  def attempt_login
    byebug
    email = params[:email]
    attempted_password = params[:password]
    user = User.find_by(email: email)
    if user && user.authenticate(attempted_password)
      session[:user_id] = user.id
      redirect_to '/welcome'
    end
  end

  def logout
    session[:user_id] = nil
  end
end

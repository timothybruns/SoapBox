class UsersController < ApplicationController
  # def login
  # end

  # def attempt_login
  #   # byebug
  #   email = params[:email]
  #   attempted_password = params[:password]
  #   user = User.find_by(email: email)
  #   if user && user.authenticate(attempted_password)
  #     session[:user_id] = user.id
  #     redirect_to '/welcome'
  #   end
  # end

  # def logout
  #   session[:user_id] = nil
  # end

#   def new
#   end

#   def create
#     user = User.new(user_params)
#     if user.save
#       session[:user_id] = user.id
#       redirect_to '/'
#     else
#       redirect_to '/signup'
#     end
#   end

# private
#   def user_params
#     params.require(:user).permit(:email, :password, :password_confirmation)
#   end

# end

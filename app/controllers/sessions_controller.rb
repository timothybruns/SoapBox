class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      render json: {
        user_id: user.id,
        success: true
      }
    else
    # If user's login doesn't work, send them back to the login form.
      render json: {
        success: false
      }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end

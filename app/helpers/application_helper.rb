module ApplicationHelper
  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  def validate_logged_in
    if !current_user
      redirect_to '/login'
    end
  end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user

  # def authorize
  #   redirect_to '/login' unless current_user
  # end

end

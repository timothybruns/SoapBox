module ApplicationHelper
  def current_user
    User.find_by(id: session[:user_id])
  end

  def validate_logged_in
    if !current_user
      redirect_to '/login'
    end
  end

end

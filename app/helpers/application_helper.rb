module ApplicationHelper
  def current_user
    User.find_by(session[:user_id])
  end
end

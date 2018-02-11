class ApplicationController < ActionController::API
  include ApplicationHelper
  before_action :init_session_hash

  def init_session_hash
    session["init"] = true
  end

end

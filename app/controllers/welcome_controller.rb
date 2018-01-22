class WelcomeController < ApplicationController
  def index
    validate_logged_in
  end
end

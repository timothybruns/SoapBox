Rails.application.routes.draw do

  get 'welcome/index'

  # get '/login' => 'users#login'
  # post '/attempt_login' => 'users#attempt_login'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  namespace :api do
    resources :books
  end


  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :users
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
    get '/books/by_user/:user_id' => 'books#by_user'
  end


  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

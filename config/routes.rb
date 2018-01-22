Rails.application.routes.draw do

  get 'welcome/index'

  get '/login' => 'users#login'
  post '/attempt_login' => 'users#attempt_login'

  resources :books

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

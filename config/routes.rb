Rails.application.routes.draw do

  root 'homepage#index'

  namespace :api do
    resources :contractors, only: [:destroy]
    resources :musicians, only: [:index, :destroy]
    resources :jobs, only: [:index, :create]
  
    get "/me", to: "users#show"
    post "/signup_as_contractor", to: "contractors#create"
    post "/signup_as_musician", to: "musicians#create"
    post "/signin", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  get '*path', to: 'homepage#index'
end

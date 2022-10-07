Rails.application.routes.draw do
  
  root 'homepage#index'

  namespace :api do
    resources :contractors, only: [:index, :destroy]
    resources :musicians, only: [:index, :destroy]
  
    get "/me", to: "users#show"
    post "/signup_as_contractor", to: "contractors#create"
    post "/signup_as_musician", to: "musicians#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  get '*path', to: 'homepage#index'
end

Rails.application.routes.draw do
  root 'homepage#index'
  get '*path', to: 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :contractors, only: [:index, :destroy]
    resources :musicians, only: [:index, :destroy]
  
    get "/me", to: "users#show"
    post "/signup_as_contractor", to: "contractors#create"
    post "/signup_as_musician", to: "musicians#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
end

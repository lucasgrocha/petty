Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :pets
      resources :contacts
      resources :landing, only: [:index]
      resources :search, only: [:index]
    end
  end
end

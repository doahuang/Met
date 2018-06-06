Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: %i(create destroy)

    resources :users, only: :create
    resources :spots, only: %i(index show create update) do
      resources :bookings, only: :create
      resources :reviews, only: :create
    end
    resources :bookings, only: %i(index destroy)
    resources :reviews, only: %i(index destroy)
  end

  root to: 'static_pages#root'
end

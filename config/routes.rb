Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :create, :destroy]
    resources :favorites, only: [:create, :destroy]
  end
end

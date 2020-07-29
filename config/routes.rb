Rails.application.routes.draw do
  devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout'}, controllers: { omniauth_callbacks: 'users/omniauth' }
  root 'home#index'
  resources :rooms do
    member do
      delete :delete_images
    end
    resources :reservations, except: [:index]
    post 'checkout', to: 'reservations#checkout' 
  end
  get 'trips', to: 'reservations#index'
  get 'search', to: 'home#search'
end

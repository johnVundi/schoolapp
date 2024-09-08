Rails.application.routes.draw do
  resources :mpesas
  resources :fees
  resources :course_units
  resources :units, only: [:index]
  resources :courses, only: [:index, :show, :create, :destroy]
  resources :admins
  resources :students, only: [:create, :update, :show]
  post "/login", to: "sessions#create"
  post "/admin-login", to: "sessions#admin_create"
  get "/me", to: "students#logged_in"
  delete "/logout", to: "sessions#destroy"
  delete "/logout/admin", to: "sessions#destroy_admin"
  get "/adminme", to: "admins#logged_in"

  post 'stkpush', to: 'mpesa#stkpush'
  post 'polling_payment', to: 'mpesa#polling_payment'
end

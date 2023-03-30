Rails.application.routes.draw do
  namespace :api do
    namespace :beta do
      resources :transactions
      resources :categories
    end
  end
end

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root 'home#top'
  get '/' => "home#top"
  get 'about' => "home#about"


  get 'posts/index'
  get 'posts/new'
  get 'posts/:id' => "posts#show"
  get 'posts/:id/edit' => "posts#edit"
end

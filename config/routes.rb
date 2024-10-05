Rails.application.routes.draw do
  root 'synopsis#index'
  post '/synopsis', to: 'synopsis#create'
end

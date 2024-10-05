Rails.application.routes.draw do
  root 'synopsis#index'
  post '/synopsis', to: 'synopsis#create'
  get 'pdfs/:filename', to: 'synopsis#show_pdf', as: 'pdf'
end

#OR like this:
# Rails.application.routes.draw do
#   root 'synopsis#index' # Set the root route to the index action of SynopsisController

#   resources :synopses, only: [:index, :create] do
#     get 'pdf/:filename', to: 'synopsis#show_pdf', on: :collection, as: 'pdf'
#   end
# end

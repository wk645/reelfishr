Rails.application.routes.draw do

	namespace :api do
		namespace :v1 do
			get '/', to: 'movies#index'
  			get '/movie/:query', to: 'movies#show'
  		end
  	end 
end

class Api::V1::MoviesController < ApplicationController

	def index
		puts "Hi Yomi"
		# @movies = Movie.all
		render json: "Yomi"
	end

	def create
		@movie = Movie.find_or_create_by(name: params[:movie][:name])
	end

	def show
		# find if the movie exists in the db
		movie_title = params[:query].gsub(/\+/, ' ')
		@movie = Movie.find_by(title: movie_title)
		render json: @movie
		# if !@movie
		# 	# fetch 
		# 	@movie = JSON.parse(RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=2b11df788b627a6cd7c12d0399f6d17f&query=#{x}"))

		# 	@movie.each do |m|
		# 		mov = Movie.create(
		# 			title: r["original_title"]
		# 			)
		# 	end
		# end
	end
	

end

## https://api.themoviedb.org/3/search/movie?api_key=2b11df788b627a6cd7c12d0399f6d17f&query=Jack+Reacher
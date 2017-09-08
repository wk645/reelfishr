require 'rest-client'
require 'json'

genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]

genres.each {|g| Genre.create(name: g)}

movies = [12, 152, 154, 157, 168, 172, 174, 193, 199, 200, 201, 268, 272, 364, 408, 557, 558, 559, 585, 756, 862, 863, 1930, 2062, 9325, 9487, 9806, 10112, 10138, 10193, 10340, 10948, 11224, 11544, 11674, 11688, 13475, 17711, 26452]

requests = movies.map {|x| 
JSON.parse(RestClient.get("https://api.themoviedb.org/3/movie/#{x}?api_key=2b11df788b627a6cd7c12d0399f6d17f"))}

requests.each do |r| 
	mov = Movie.create(
		title: r["original_title"], 
		runtime: r["runtime"], 
		popularity: r["popularity"], 
		overview: r["overview"],  
		poster_path: r["poster_path"])
	genres = r["genres"].map {|g| Genre.find_by(name: g["name"])}
	mov.genres << genres
end

# , 54138, 62211, 68721, 69360, 69592, 76338, 93560, 100402, 102382, 105864, 127380, 171944, 188927, 209112, 233088, 271110, 337401
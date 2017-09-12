require 'rest-client'
require 'json'

genres = [
	{name: "Action", id: 28},
	{name: "Adventure", id: 12},
	{name: "Animation", id: 16},
	{name: "Comedy", id: 35},
	{name: "Crime", id: 80},
	{name: "Documentary", id: 99},
	{name: "Drama", id: 18},
	{name: "Family", id: 10751},
	{name: "Fantasy", id: 14},
	{name: "History", id: 36},
	{name: "Horror", id: 27},
	{name: "Music", id: 10402},
	{name: "Mystery", id: 9648},
	{name: "Romance", id: 10749},
	{name: "Science Fiction", id: 878},
	{name: "TV Movie", id: 10770},
	{name: "Thriller", id: 53},
	{name: "War", id: 10752},
	{name: "Western", id: 37},
	{name: "Miscellaneous", id: 74}
]


genres.each {|g, id| Genre.create(name: g[:name],tmdb_id: g[:id])}

movies = [12, 152, 154, 157, 168, 172, 174, 193, 199, 200, 201, 268, 272, 364, 408, 557, 558, 559, 585, 756, 862, 863, 1930, 2062, 9325, 9487, 9806, 10112, 10138, 10193, 10340, 10948, 11224, 11544, 11674, 11688, 13475, 17711, 26452]

requests = movies.map {|x|
JSON.parse(RestClient.get("https://api.themoviedb.org/3/movie/#{x}?api_key=2b11df788b627a6cd7c12d0399f6d17f"))}

requests.each do |r|
	mov = Movie.create(
		title: r["original_title"],
		release_date: r["release_date"],
		popularity: r["popularity"],
		overview: r["overview"],
		poster_path: r["poster_path"],
		tmdb_id: r["id"])
	genres = r["genres"].map {|g| Genre.find_by(name: g["name"])}
	mov.genres << genres
end

# , 54138, 62211, 68721, 69360, 69592, 76338, 93560, 100402, 102382, 105864, 127380, 171944, 188927, 209112, 233088, 271110, 337401

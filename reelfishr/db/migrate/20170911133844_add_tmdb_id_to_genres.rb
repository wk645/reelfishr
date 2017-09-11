class AddTmdbIdToGenres < ActiveRecord::Migration[5.1]
  def change
  	add_column :genres, :tmdb_id, :integer
  end
end

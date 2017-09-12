class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
    	t.string :title
    	t.string :release_date
    	t.integer :popularity
    	t.string :overview
    	t.string :poster_path
      t.integer :tmdb_id
      	t.timestamps
    end
  end
end

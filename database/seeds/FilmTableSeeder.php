<?php
use Illuminate\Database\Seeder;

class FilmTableSeeder extends Seeder {
	
	public function run() 
	{
		// DB::table('films')->delete();

		factory(App\Film::class, 3)->create()->each(function ($u) {
			  $u->comments()->save(factory(App\Comment::class)->make());
		});

		// DB::table('films')->insert($countries);
	}
}

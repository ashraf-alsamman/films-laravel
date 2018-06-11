<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreTableSeeder extends Seeder {
	
	public function run() 
	{
		DB::table('genres')->delete();

		$genres = array(
			array('title' => 'Action'),
			array('title' => 'Adventure'),
			array('title' => 'Animation'),
			array('title' => 'Comedy'),
			array('title' => 'Family')

 
		);

		DB::table('genres')->insert($genres);
	}
}

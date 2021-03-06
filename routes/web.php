<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 

Route::get('/', function () {
    return redirect('/films');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/films', 'FilmController@index')->name('films');
Route::get('/films/add', 'FilmController@add')->name('films')->middleware('auth');;

Route::get('/films/{slug}', 'FilmController@GetFilmBySlug')->name('GetFilmBySlug');


Route::get('/AllGenres', 'GenreController@AllGenres')->name('AllGenres');
Route::get('/countries', 'CountryController@Country')->name('countries');
Route::post('/SaveFilm', 'FilmController@SaveFilm')->name('SaveFilm');

Route::post('/AddComment', 'CommentController@AddComment')->name('AddComment')->middleware('auth');;

Route::get('/PhotosByFilm/{id}', 'FilmController@PhotosByFilm')->name('PhotosByFilm');
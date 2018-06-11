<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Film; 
use App\Photo; 
use App\FilmGenre; 
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\AjaxImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;


class FilmController extends Controller
{

    public function index(){
        $films = DB::table('films')->paginate(2);
        return View('films.index', ['films' => $films] );
      }

    public function add(){
      return View('films.add' );
    } 
   
    public function GetFilmBySlug($slug){
      $Film =  Film::where(['film_slug'=>$slug])->first() ;
      $Photos =       $Film->Photos()->get(); 
      $Comments = $Film->Comments()->get(); 
      return view('films.FilmBySlug', ['Film' => $Film,'Photos' => $Photos,'Comments' => $Comments]);  
    
    } 
   
   
    public function createSlug($str, $delimiter = '-'){

        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
        return $slug;
    
    } 

    public function SaveFilm(Request $request)
    {
        // return $request->all();
     /*
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required',
            'phone' => 'required',
            'category' => 'required',
        ]);
*/
        $Film = new Film();
        $Film->name = $request->name ;
        $Film->description = $request->description ;
        $Film->realease_date = $request->realease_date ;
        $Film->rating = $request->rating ;
        $Film->ticket_price = $request->ticket_price ;
        $Film->country_id = $request->country_id ;
        $Film->film_slug = $this->createSlug ($request->name); 

    //  $Film->user_id = 1; 
        // $Film->save();

 
        if($Film->save()) 
        {
           
                  // start save genres
       $qqq = $request->genres;
       $genres = explode(",",$qqq);
  
       
       foreach($genres as $genre):
 
        $FilmGenre = new FilmGenre();
        $FilmGenre->genre_id = $genre;
        $FilmGenre->film_id = $Film->id;
        $FilmGenre->save();
        endforeach;
      
        $index = 0;

            // upload start
            $image = $request->file('image');
            foreach($image as $singleFile):
            
            // $imageName =  $index.time().'.'.$singleFile->getClientOriginalExtension();
            // Storage::put($imageName,file_get_contents($singleFile));
            $imageName = $singleFile->hashName();
             $singleFile->move(public_path('/uploads'),$imageName ); 

            $Photo = new Photo();
            $Photo->data = $imageName;
            $Photo->film_id = $Film->id;
            $Photo->save();    $index++;

            endforeach;
            // upload end
 return $Film->film_slug;




        }

 



    
}  
}

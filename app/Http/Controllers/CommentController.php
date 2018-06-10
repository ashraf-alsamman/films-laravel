<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment; 

  
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;
class CommentController extends Controller
{
    public function AddComment (Request $request)
    {
        $Comment = new Comment();
        $Comment->user_id =  Auth::user()->id;
        $Comment->film_id =  $request->film_id;
        $Comment->comment =  $request->comment;

        if($Comment->save()) 
        {
           return 'done';
        }

    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public function Photos()
    {
        return $this->hasMany('App\Photo');
    }

    public function Comments()
    {
        return $this->hasMany('App\Comment');
    }


    
}

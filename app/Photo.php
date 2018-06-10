<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public function group() 
    {
        return $this->belongsTo('App\Film');
    }
}

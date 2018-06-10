<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public function Film() 
    {
        return $this->belongsTo('App\Film');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public function Photos()
    {
        return $this->hasMany('App\Photo');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function salons(){
        return $this->hasMany(Salon::class);
    }
}

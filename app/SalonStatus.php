<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalonStatus extends Model
{
    public function salons(){
        return $this->belongsToMany(Salon::class);
    }
}

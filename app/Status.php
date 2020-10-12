<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public function salons(){
        return $this->belongsToMany(Salon::class, 'salon_status', 'status_id');
    }
}

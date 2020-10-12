<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name', 'price', 'duration'
    ];

    public function salons(){
        return $this->belongsToMany(Salon::class, 'salon_service', 'service_id');
    }
}

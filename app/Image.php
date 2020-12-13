<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
    protected $fillable = ['image_path'];


    public function salons(){
        return $this->belongsToMany(Salon::class, 'salon_images', 'image_id');
    }

}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    protected $fillable = [];

//    protected $casts = [
//        'workdaysOpen' => 'hh:mm'
//    ];


    public $timestamps = false;

    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function statuses(){
        return $this->belongsToMany(Status::class, 'salon_status', 'salon_id');
    }

    public function services(){
        return $this->belongsToMany(Service::class, 'salon_service', 'salon_id');
    }

    public function appointments(){
        return $this->belongsToMany(Salon::class, 'appointments', 'salon_id')->withPivot('date', 'time');
    }

    public function images(){
        return $this->belongsToMany(Image::class, 'salon_images', 'salon_id');
    }


}

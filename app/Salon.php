<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
//    protected $fillable = [
//        'name',
//        'status',
//        'pib',
//        'address',
//        'phone_number',
//        'category_id',
//        'city_id',
//        'website',
//        'stars',
//        'latitude',
//        'longitude',
//        'description',
//        'image_path',
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

}

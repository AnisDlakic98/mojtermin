<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = ['salon_id', 'user_id', 'service_name', 'salon_name', 'message', 'date', 'time', 'contact_phone'];
}

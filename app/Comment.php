<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [ 'comment', 'name', 'email', 'user_id', 'salon_id' ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens; // dodao
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable implements MustVerifyEmail
{
    use LaratrustUserTrait;
    use HasApiTokens, Notifiable; // dodao

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'bio', 'type', 'photo', 'salon_id', 'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function salon()
    {
        return $this->belongsTo(Salon::class);
    }

    public function comments(){
        return $this->belongsTo(Comment::class);
    }

    public function appointments()
    {
        return $this->belongsToMany(User::class, 'appointments', 'user_id')->withPivot('date', 'time', 'service_name', 'salon_name');
    }
}

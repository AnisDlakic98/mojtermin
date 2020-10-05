<?php

namespace App\Http\Controllers;

use App\Mail\SignupMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public static function sendSignupEmail($name, $email, $verification_code){
        $data = [
            'name' => $name,
            'verification_code' => $verification_code
        ];


//        Mail::to($email)->send(new SignupMail($data));

        $data = array('name'=>"Virat Gandhi");

        Mail::send(['text'=>'mail'], $data, function($message) {
            $message->to('anis.dlakic.fit@gmail.com', 'Tutorials Point')->subject('Laravel Basic Testing Mail');
            $message->from('xyz@gmail.com','Virat Gandhi');
        });




    }
}
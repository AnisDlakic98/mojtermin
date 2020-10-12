<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->insert(
            [
                [ 'name' => 'Feniranje', 'price' => 5, 'duration' => '1h 30min'],
                [ 'name' => 'Šišanje', 'price' => 60, 'duration' => '1h 30min'],
                [ 'name' => 'Šišanje i Feniranje', 'price' => 45, 'duration' => '1h 30min'],
                [ 'name' => 'Skraćivanje šiški', 'price' => 30, 'duration' => '1h 30min'],
                [ 'name' => 'Presa / Figaro popravke', 'price' => 28, 'duration' => '1h 30min'],
                [ 'name' => 'Presa / Figaro uvijanje cijele kose', 'price' => 8, 'duration' => '1h 30min'],
                [ 'name' => 'Tretmani lica', 'price' => 7, 'duration' => '1h 30min'],
                [ 'name' => 'Tretmani tijela', 'price' => 5, 'duration' => '1h 30min'],
                [ 'name' => 'Anticelulit program', 'price' => 45, 'duration' => '1h 30min'],
                [ 'name' => 'SPA paketi', 'price' => 25, 'duration' => '1h 30min'],
                [ 'name' => 'Yoga SPA ', 'price' => 15, 'duration' => '1h 30min'],
            ]
        );
    }
}

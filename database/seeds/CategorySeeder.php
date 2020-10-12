<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(
            [
                [ 'name' => 'Frizeri'],
                [ 'name' => 'Pedikir & Manikir'],
                [ 'name' => 'Fizioterapeuti'],
                [ 'name' => 'Kozmetičari'],
                [ 'name' => 'Tatoo'],
                [ 'name' => 'Berberi'],
                [ 'name' => 'Šminkeri & Makeup'],
                [ 'name' => 'Depilacija'],
                [ 'name' => 'Solarijumi'],
                [ 'name' => 'Wellness'],
                [ 'name' => 'Yoga SPA '],
            ]
        );
    }
}

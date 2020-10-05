<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insert(
            [
                [ 'name' => 'Bijelo Polje', 'country_id' => 1 ],
                [ 'name' => 'Podgorica', 'country_id' => 1 ],
                [ 'name' => 'Herceg Novi', 'country_id' => 1 ],
                [ 'name' => 'Sarajevo', 'country_id' => 3 ],
                [ 'name' => 'Beograd', 'country_id' => 2 ],
            ]
        );
    }
}

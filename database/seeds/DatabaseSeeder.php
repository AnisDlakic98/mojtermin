<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LaratrustSeeder::class,
            CountrySeeder::class,
            CitySeeder::class,
            CategorySeeder::class,
            SalonSeeder::class,
            StatusSeeder::class,
            SalonStatusSeeder::class,
            ServiceSeeder::class,
            SalonServiceSeeder::class,
        ]);
    }
}

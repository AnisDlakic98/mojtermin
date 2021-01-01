<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salons')->insert(
            [
                [
                    'address' => '19 White Church Lane',
                    'category_id' => 1,
                    'gender' => 'unisex',
                    'city_id' =>  1,
                    'description' => 'description',
                    'image_path' => 'description',
                    'latitude' => '5',
                    'longitude' => '5',
                    'name' => 'Treat Beauty London',
                    'phone_number' => '+38268848285',
                    'stars' => 5,
                    'website' => 'https://www.beautysalons.com'
                ],
                [
                    'address' => '85 Whitechapel High Street',
                    'category_id' => 1,
                    'gender' => 'unisex',
                    'city_id' =>  1,
                    'description' => 'description',
                    'image_path' => 'description',
                    'latitude' => '5',
                    'longitude' => '5',
                    'name' => 'The Nail Lounge',
                    'phone_number' => '+38268848285',
                    'stars' => 5,
                    'website' => 'https://www.beautysalons.com'
                ],
                [
                    'address' => '19 White Church Lane',
                    'category_id' => 1,
                    'gender' => 'male',
                    'city_id' =>  1,
                    'description' => 'description',
                    'image_path' => 'description',
                    'latitude' => '5',
                    'longitude' => '5',
                    'name' => 'Treat Beauty London',
                    'phone_number' => '+38268848285',
                    'stars' => 4,
                    'website' => 'https://www.beautysalons.com'
                ],
                [
                    'address' => '50 Harrington Road',
                    'category_id' => 1,
                    'gender' => 'female',
                    'city_id' =>  1,
                    'description' => 'description',
                    'image_path' => 'description',
                    'latitude' => '5',
                    'longitude' => '5',
                    'name' => 'Karda Hair & Beauty',
                    'phone_number' => '+38268848285',
                    'stars' => 4,
                    'website' => 'https://www.beautysalons.com'
                ]

            ]
        );
    }
}

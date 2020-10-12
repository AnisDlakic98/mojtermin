<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalonServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salon_service')->insert(
            [
                [ 'salon_id' => 1, 'service_id' => 1 ],
                [ 'salon_id' => 1, 'service_id' => 2 ],
                [ 'salon_id' => 1, 'service_id' => 3 ],
                [ 'salon_id' => 1, 'service_id' => 4 ],
                [ 'salon_id' => 2, 'service_id' => 5 ],
                [ 'salon_id' => 2, 'service_id' => 6 ],
                [ 'salon_id' => 3, 'service_id' => 7 ],
                [ 'salon_id' => 4, 'service_id' => 8 ],
            ]
        );
    }
}

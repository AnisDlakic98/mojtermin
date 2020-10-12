<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalonStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salon_status')->insert(
            [
                [ 'salon_id' => 1, 'status_id' => 1 ],
                [ 'salon_id' => 2, 'status_id' => 1 ],
                [ 'salon_id' => 3, 'status_id' => 1 ],
                [ 'salon_id' => 4, 'status_id' => 1 ],
            ]
        );
    }
}

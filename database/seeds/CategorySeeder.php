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
                [ 'name' => 'kategorija 1'],
                [ 'name' => 'kategorija 2'],
                [ 'name' => 'kategorija 3'],
                [ 'name' => 'kategorija 4'],
            ]
        );
    }
}

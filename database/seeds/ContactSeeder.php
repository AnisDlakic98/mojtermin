<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contacts')->insert(
            [
                [
                    'message' => 'Oduševljena sam. Sistem za zakazivanje mi je uvek dostupan, a i izveštaji su super korisni. Hvala',
                    'subject' => "Hvala!",
                    'name' => 'Anis Dlakić',
                    'email' => 'anis.dlakc@gmail.com',
                ]
            ]
        );
    }
}

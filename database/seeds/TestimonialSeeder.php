<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('testimonials')->insert(
            [
                [
                    'author' => 'Anis Dlakić',
                    'text' => "Oduševljena sam. Sistem za zakazivanje mi je uvek dostupan, a i izveštaji su super korisni. Hvala",
                    'stars' => 5,
                ],
                [
                    'author' => 'Dejan Obradović',
                    'text' => "Neverovatno jednostavno i moćno. Oduševljen sam organizacijom koju sada imam.",
                    'stars' => 4,
                ],
                [
                    'author' => 'Matija Femić',
                    'text' => "Kod frizera ne idem tako često ali volim da na svake dvije do tri sedmice odem da sredim nokte u jednom salonu a uporedo sa tim odem i kod kometičarke na tretman lica.",
                    'stars' => 1,
                ],
            ]
        );

    }
}

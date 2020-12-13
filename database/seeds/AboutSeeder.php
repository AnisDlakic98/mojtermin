<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('abouts')->insert(
            [
                [
                    'title' => 'Zašto su drugi izabrali MojTermin?',
                    'subtitle' => "<p>Naš <b>cilj</b> je da ti omogućimo da salon vodiš lepše i lakše.</p></br>
                    <p>Verujemo da <b>tehnologija</b> mora da bude jednostavna i na tome smo zasnovali <b>MojTermin</b>.</p></br>
                    <p>U kreiranju su nam <b>pomogle</b> i tvoje kolege iz različitih salona, savetima, predlozima, kritikama i pohvalama.</p></br>
                    <p>Ovo je samo prvi korak. Planiramo da te konstantno iznenađujemo novim stvarima.</p>",
                ],
            ]
        );
    }
}

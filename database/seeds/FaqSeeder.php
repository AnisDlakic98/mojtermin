<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('faqs')->insert(
            [
                [
                    'title' => 'Pregledaj istoriju dolazaka',
                    'body' => "Za svaku mušteriju trajno ćeš imati sačuvanu istoriju izvršenih usluga.Uvek možeš videti kada je dolazio i koliko si novca zaradio.",
                ],
                [
                    'title' => 'Odmah dostupni kontakt podaci',
                    'body' => "Ako uneseš ime, broj telefona i e-mail, lako ćeš moći da dođeš do tih podataka. Zaista jednostavno i brzo.",
                ],
                [
                    'title' => 'Brza pretraga',
                    'body' => "Za samo par sekundi nađi podatke o mušteriji.Sve opcije su zaista jednostavne i lako dostupne.",
                ],
                [
                    'title' => 'Lista korisnih funkcija konstantno raste',
                    'body' => "Naš cilj je da ti pomognemo u svakodnevnom radu i da tvoje mušterije budu oduševljene. Ako imaš predloge za nove funkcionalnosti piši nam.",
                ],
            ]
        );
    }
}

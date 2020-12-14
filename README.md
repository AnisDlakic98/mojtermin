VAŽNO!! UPUSTVO ZA INSTALACIJU I POKRETANJE PROJEKTA

git clone https://github.com/AnisDlakic98/mojtermin.git

prvo ove dvije komande

composer install
npm install

pa napraviti bazu

pa komanda
cp .env.example .env

pa u .env staviti
DB_DATABASE=naziv_baze

i na kraj

port provjeriti obavezno u .env i u database.php

i na kraju sledece komande
php artisan key:generate
php artisan migrate:fresh --seed
npm run watch

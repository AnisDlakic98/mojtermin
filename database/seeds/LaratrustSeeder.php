<?php

use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Config;

class LaratrustSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
        $this->truncateLaratrustTables();

        $config = config('laratrust_seeder.roles_structure');
        $mapPermission = collect(config('laratrust_seeder.permissions_map'));

        foreach ($config as $key => $modules) {

            // Create a new role
            $role = \App\Models\Role::firstOrCreate([
                'name' => $key,
                'display_name' => ucwords(str_replace('_', ' ', $key)),
                'description' => ucwords(str_replace('_', ' ', $key))
            ]);
            $permissions = [];

            $this->command->info('Creating Role '. strtoupper($key));

            // Reading role permission modules
            foreach ($modules as $module => $value) {

                foreach (explode(',', $value) as $p => $perm) {

                    $permissionValue = $mapPermission->get($perm);

                    $permissions[] = \App\Models\Permission::firstOrCreate([
                        'name' => $module . '-' . $permissionValue,
                        'display_name' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                        'description' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                    ])->id;

                    $this->command->info('Creating Permission to '.$permissionValue.' for '. $module);
                }
            }

            // Attach all permissions to the role
            $role->permissions()->sync($permissions);

            if(Config::get('laratrust_seeder.create_users')) {
                $this->command->info("Creating '{$key}' user");
                // Create default user for each role
                $user = \App\User::create([
                    'name' => ucwords(str_replace('_', ' ', $key)),
                    'email' => $key.'@app.com',
                    'password' => bcrypt('password')
                ]);
                $user->attachRole($role);
            }

        }

        $user1 = User::create([
            'name' => 'Superadmin',
            'email' => 'superadmin@mojtermin.me',
            'password' => Hash::make('12345678'),
            'email_verified_at' => '2020-12-08 19:25:45.000000',
        ]);
        $user1->attachRole('superadministrator');

        $user2 = User::create([
            'name' => 'Luka Radović',
            'email' => 'lukaradovic@gmail.com',
            'password' => Hash::make('12345678'),
            'email_verified_at' => '2020-12-08 19:25:45.000000',
        ]);
        $user2->attachRole('user');

//        \App\Salon::create([
//            'status' => 1,
//            'name' => 'Chelsea Hair and Skin Clinic By KARDA',
//            'description' => 'Ideally located in the heart of London\'s prestigious South Kensington district, Karda Beauty is a slick and sophisticated salon offering a wide selection of professional hair, beauty and wellness services. Their diverse menu ranges from relaxing massages, facials and eye care to haircuts, styling and a host of innovative hair conditioning treatments. The calm, laid-back atmosphere provides the perfect respite from the stress and chaos of the capital. This, coupled with the experience and skill of their master beauticians, makes Karda an unbeatable option for those in need of an opulent afternoon of beauty therapy in central London. Let their talented hairdressers transform your locks with a thermal scissors cut or some stunning colour highlights.',
//            'address' => '50 Harrington Road, London (South Kensington), England',
//            'phone_number' => '+382 68 848 285',
//            'stars' => '5',
//            'image_path' => '',
//            'city_id' => 1,
//            'category_id' => 1,
//            'website' => 'https://fontawesome.com/',
//            'latitude' => 42.4304,
//            'longitude' => 19.2594,
//        ]);
//
//        $user2 = User::create([
//            'name' => 'Atko Medjedovic',
//            'email' => 'atko@gmail.com',
//            'password' => Hash::make('12345678'),
//            'email_verified_at' => '2020-12-08 19:25:45.000000',
//            'salon_id' => '1',
//        ]);
//        $user2->attachRole('admin');

    }

    /**
     * Truncates all the laratrust tables and the users table
     *
     * @return    void
     */
    public function truncateLaratrustTables()
    {
        $this->command->info('Truncating User, Role and Permission tables');
        Schema::disableForeignKeyConstraints();
        DB::table('permission_role')->truncate();
        DB::table('permission_user')->truncate();
        DB::table('role_user')->truncate();
        if(Config::get('laratrust_seeder.truncate_tables')) {
            \App\Models\Role::truncate();
            \App\Models\Permission::truncate();
        }
        if(Config::get('laratrust_seeder.truncate_tables') && Config::get('laratrust_seeder.create_users')) {
            \App\User::truncate();
        }
        Schema::enableForeignKeyConstraints();
    }
}

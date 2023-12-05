<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $seeder1 = new PaginaSeeder;
        $seeder1->run();

        
        $seeder2 = new PersonaSeeder;
        $seeder2->run();

        
        $seeder1 = new RolSeeder;
        $seeder1->run();

        
        $seeder1 = new UsuarioSeeder;
        $seeder1->run();
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pagina>
 */
class PaginaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

      
        return [
            
            
        'fechacreacion'=>fake()->date(),
        'fechamodificacion'=>fake()->date(),
             'usuariocreacion'=>fake()->date(),
            'usuariomoficacion'=>fake()->date(),
             'url'=>fake()->imageUrl(),
              'estado'=>fake()->boolean(),
              'nombre'=>fake()->name(),
              'descripcion'=>fake()->text($maxNbChars = 200),
              'icono'=>fake()->imageUrl(),
             'tipo'=>fake()->name()
        ];
    }
}

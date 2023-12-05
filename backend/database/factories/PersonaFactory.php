<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Persona>
 */
class PersonaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {



        return [
            'primernombre' =>fake()->name(),
            'segundonombre'=>fake()->name(),
              'primerapellido'=>fake()->name(),
               'segundoapellido'=>fake()->lastName(),
               'fechacreacion'=>fake()->date(),
             'fechamodificacion'=>fake()->date(),
               'usuariocreacion'=>fake()->date(),
            'usuariomodificacion'=>fake()->date()
        ];
    }
}

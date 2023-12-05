<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bitacora>
 */
class BitacoraFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bitacora'=>fake()->name(),
          'idusuario'=>fake()->numberBetween(1,15),
            'fecha'=>fake()->date(),
            'hora'=>fake()->time(),
            'ip'=>fake()->phoneNumber(),
            'so'=>fake()->name(),
            'navegador'=>fake()->imageUrl(),
            'usuario'=>fake()->name()
        ];
    }
}

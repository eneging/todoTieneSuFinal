<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enlace>
 */
class EnlaceFactory extends Factory
{
    /**
     * Define the model'=> fake()->s default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'idpagina'=> fake()->numberBetween(1,15),
            'idrol'=> fake()->numberBetween(1,6),
            'descripcion'=> fake()->realTextBetween($minNbChars = 160),
            'fechacreacion'=> fake()->date(),
            'fechamodificacion'=> fake()->date(),
            'usuariocreacion'=> fake()->date()
        ];
    }
}

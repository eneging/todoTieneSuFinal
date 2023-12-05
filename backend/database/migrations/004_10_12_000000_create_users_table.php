<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('idusuario');
            $table->unsignedBigInteger('idpersona')->nullable();
            $table->string('usuario');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('habilitado')->default(true);
            $table->string('fecha')->nullable();
            $table->unsignedBigInteger('idrol')->nullable();
            $table->string('fechamodificacion')->nullable();
            $table->string('usuariocreacion')->nullable();
            $table->string('usuariomodificacion')->nullable();
            $table->rememberToken();
            $table->foreign('idpersona')->references('idpersona')->on('personas')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('idrol')->references('idrol')->on('roles')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

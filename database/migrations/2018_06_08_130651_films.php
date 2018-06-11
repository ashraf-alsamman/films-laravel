<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Films extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
       
        $table->increments('id');
        $table->string('name');
        $table->text('description');
        $table->date('realease_date');
        $table->tinyInteger('rating');
        $table->integer('ticket_price');
        $table->integer('country_id'); 
        $table->string('film_slug'); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}

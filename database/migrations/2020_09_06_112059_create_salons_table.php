<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salons', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status')->default(0);
            $table->string('gender')->nullable();
            $table->string('name');
            $table->longText('description')->nullable();
            $table->string('address');
            $table->string('phone_number');
            $table->integer('stars')->nullable();
            $table->string('image_path')->nullable();
            $table->integer('city_id')->unsigned();
            $table->integer('category_id')->unsigned(); // fk
            $table->string('website')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->time('workdaysOpen')->nullable();
            $table->time('workdaysClose')->nullable();
            $table->time('saturdayOpen')->nullable();
            $table->time('saturdayClose')->nullable();
            $table->time('sundayOpen')->nullable();
            $table->time('sundayClose')->nullable();

            $table->foreign('category_id')
                ->references('id')->on('categories')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('city_id')
                ->references('id')->on('cities')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salons');
    }
}

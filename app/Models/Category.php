<?php

namespace App\Models; // nombre de la ruta

use Illuminate\Database\Eloquent\Model; //librerias
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model 
{
    use HasFactory;

    protected $fillable = [
    'name',
    'description',
    'image'
    ];
    public function products(){
        return $this->hasMany(Product::class);
    }

}

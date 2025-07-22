<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'MotherBoards',
                'description' => 'Main printed circuit boards that connect all computer components.'
            ],
            [
                'name' => 'CPU',
                'description' => 'Central Processing Unit, the primary component that performs calculations and runs instructions.'
            ],
            [
                'name' => 'GPU',
                'description' => 'Graphics Processing Unit, responsible for rendering images, videos, and animations.'
            ],
            [
                'name' => 'Memory RAM',
                'description' => 'Random Access Memory, temporary storage used for fast data access by active processes.'
            ],
            [
                'name' => 'Power supply',
                'description' => 'Component that converts electrical power from an outlet into usable power for the internal parts of a computer.'
            ]
        ];
        foreach($categories as $category){
            Category::create($category);
        }
    }
}

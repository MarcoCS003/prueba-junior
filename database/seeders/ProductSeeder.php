<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'ASUS ROG Strix B550-F',
                'description' => 'High-performance motherboard for AMD Ryzen processors',
                'price' => 189.99,
                'quantity' => 30,
                'category_id' => 1
            ],
            [
                'name' => 'MSI MPG Z790 Edge',
                'description' => 'Gaming motherboard with LGA1700 socket for Intel 12th/13th Gen',
                'price' => 249.99,
                'quantity' => 20,
                'category_id' => 1
            ],
            [
                'name' => 'AMD Ryzen 7 5800X',
                'description' => '8-core, 16-thread CPU with high performance for gaming and productivity',
                'price' => 299.99,
                'quantity' => 40,
                'category_id' => 2
            ],
            [
                'name' => 'Intel Core i7-13700K',
                'description' => 'High-end 13th Gen CPU for enthusiasts and creators',
                'price' => 419.99,
                'quantity' => 35,
                'category_id' => 2
            ],
            [
                'name' => 'NVIDIA GeForce RTX 4070',
                'description' => 'Powerful graphics card for high-resolution gaming and rendering',
                'price' => 599.99,
                'quantity' => 25,
                'category_id' => 3
            ],
            [
                'name' => 'AMD Radeon RX 6800 XT',
                'description' => 'High-performance GPU for gaming and content creation',
                'price' => 549.99,
                'quantity' => 28,
                'category_id' => 3
            ],
            [
                'name' => 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
                'description' => 'High-speed RAM with reliable performance and low profile design',
                'price' => 74.99,
                'quantity' => 60,
                'category_id' => 4
            ],
            [
                'name' => 'G.Skill Trident Z RGB 32GB (2x16GB) DDR5 6000MHz',
                'description' => 'Premium RGB RAM with ultra-fast DDR5 speed',
                'price' => 169.99,
                'quantity' => 45,
                'category_id' => 4
            ],
            [
                'name' => 'EVGA 600W 80+ Bronze',
                'description' => 'Reliable power supply with enough wattage for most builds',
                'price' => 49.99,
                'quantity' => 70,
                'category_id' => 5
            ],
            [
                'name' => 'Corsair RM850x 850W 80+ Gold',
                'description' => 'Fully modular power supply for high-end PCs',
                'price' => 139.99,
                'quantity' => 50,
                'category_id' => 5
            ]
        ];

        foreach ($products as $product){
            Product::create($product);
        }
    }
}

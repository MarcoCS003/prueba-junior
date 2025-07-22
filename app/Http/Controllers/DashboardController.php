<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
{
    $products = Product::with('category')->get();
    $categories = Category::all();
    
    return Inertia::render('Dashboard', [
        'products' => $products,
        'categories' => $categories
    ]);
}
}
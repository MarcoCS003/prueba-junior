<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

use function Laravel\Prompts\search;

class CategoryController extends Controller //creamos esta clase que extiende de controller
{
    
    public function index(Request $request) //funcion para buscar
    {
        $query = Category::query();
        
        if($request->filled('search')){ //explicame esta parte
            $query->where('name', 'like', '%', $request->search . '%')
                ->orWhere('description','like', '%', $request->search . '%');
        }

        $categories = $query->paginate(10)->withQueryString();
        
        return Inertia::render('Categories/Index',[ // esto es lo que devuelve cuando es exitosa la busqueda?
            'categories' => $categories, // el inierta es que se encarga de distrubuir los urls del backend verdad?
            'search' => $request->search
        ]);
    }

    
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        $data = $request->only(['name', 'description']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('categories', 'public');
        }

        Category::create($data);

        return redirect()->route('categories.index')
                        ->with('success', 'Category created successfully');
    }

    public function show(Category $category)
    {
        $category->load('products');
        
        return Inertia::render('Categories/Show', [
            'category' => $category
        ]);
    }

    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        $data = $request->only(['name', 'description']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('categories', 'public');
        }

        $category->update($data);

        return redirect()->route('categories.index')
                        ->with('success', 'Category updated successfully');
    }

   public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index')
                        ->with('success', 'Category deleted successfully');
    }
}

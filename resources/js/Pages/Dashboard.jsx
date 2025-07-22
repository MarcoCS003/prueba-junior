import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ products = [], categories = [] })

{

    console.log('Products:', products);
    console.log('Categories:', categories);
    console.log('Products length:', products.length);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category_id === selectedCategory);

    const categoryFilters = [
        { id: 'all', name: 'All products' },
        ...categories.map(cat => ({ id: cat.id, name: cat.name }))
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Purchase" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <h1 className="text-2xl font-bold mb-6">Purchase</h1>
                    
                    <div className="flex gap-6">
                        {/* Sidebar con filtros */}
                        <div className="w-64 flex-shrink-0">
                            <div className="space-y-2">
                                {categoryFilters.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full px-4 py-3 text-left rounded-lg border transition-colors ${
                                            selectedCategory === category.id
                                                ? 'bg-gray-900 text-white border-gray-900'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid de productos */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                        <div className="w-full h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
                                            {product.image ? (
                                                <img 
                                                    src={`/storage/${product.image}`} 
                                                    alt={product.name}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            ) : (
                                                <span className="text-gray-400">No image</span>
                                            )}
                                        </div>
                                        
                                        <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold">${product.price}</span>
                                            <span className="text-sm text-gray-500">Stock: {product.quantity}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">No products found for this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
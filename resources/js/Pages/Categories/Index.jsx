import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Edit, Trash2, Plus } from 'lucide-react';
import DeleteConfirmModal from '@/Components/DeleteConfirmModal';

export default function Index({ categories, search }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const handleDeleteClick = (category) => {
        setCategoryToDelete(category);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (categoryToDelete) {
            router.delete(route('categories.destroy', categoryToDelete.id));
            setShowDeleteModal(false);
            setCategoryToDelete(null);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Categories" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Categories</h1>
                        <Link
                            href={route('categories.create')}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Category
                        </Link>
                    </div>

                    {/* Tabla de categorías */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                                    <th className="text-left py-3 px-4 font-semibold">Image URL</th>
                                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.data.map((category) => (
                                    <tr key={category.id} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-4">{category.name}</td>
                                        <td className="py-3 px-4 max-w-xs">
                                            <div className="truncate">{category.description}</div>
                                        </td>
                                        <td className="py-3 px-4">
                                            {category.image ? (
                                                <span className="text-blue-600 text-sm">
                                                    /storage/{category.image}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 text-sm">No image</span>
                                            )}
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={route('categories.edit', category.id)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteClick(category)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {categories.data.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No categories found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de confirmación de eliminación */}
            <DeleteConfirmModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleConfirmDelete}
                title="¿Estás seguro de eliminar esta categoría?"
                message={`La categoría "${categoryToDelete?.name}" será eliminada permanentemente.`}
            />
        </AuthenticatedLayout>
    );
}
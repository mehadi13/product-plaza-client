import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-4 border-b">ID</th>
                        <th className="p-4 border-b">Name</th>
                        <th className="p-4 border-b">Price</th>
                        <th className="p-4 border-b">Category</th>
                        <th className="p-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-t hover:bg-gray-50">
                            <td className="p-4">{product.id}</td>
                            <td className="p-4">{product.name}</td>
                            <td className="p-4">${product.price}</td>
                            <td className="p-4">{product.category}</td>
                            <td className="p-4 flex space-x-2">
                                <button 
                                    onClick={() => onEdit(product)} 
                                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                    Edit
                                </button>
                                <button 
                                    onClick={() => onDelete(product)} 
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

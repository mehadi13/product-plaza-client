import { Button } from '@/components/ui/button';
import { Delete, Edit } from 'lucide-react';
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$100', inStock: true },
  { id: 2, name: 'Product 2', price: '$200', inStock: false },
  { id: 3, name: 'Product 3', price: '$300', inStock: true },
];

export function DataTable() {
  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between m-1'>
      <span className="text-xl font-bold mb-4">Product List</span>
      <Button>Add Product</Button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">In Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{product.id}</td>
              <td className="py-2 px-4 border-b text-center">{product.name}</td>
              <td className="py-2 px-4 border-b text-center">{product.price}</td>
              <td className="py-2 px-4 border-b text-center">{product.inStock ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    <Edit/>
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                    <Delete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

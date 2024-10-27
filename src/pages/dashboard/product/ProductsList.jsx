import { Button } from '@/components/ui/button';
import { API_URL } from '@/Constant';
import { Delete, Edit } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export function ProductsList() {
  const initialProducts = useLoaderData();
  const [products, setProducts] = useState(initialProducts.results); // Set initial products state
  const navigate = useNavigate();
  
  const handleEditClick = (product) => {
    navigate(`/dashboard/products/edit/${product._id}`, { state: { product } }); // Pass product as state
  };

  const handleAddClick = () => {
    navigate('/dashboard/products/new'); // Navigate to the create product page
  };

  const deleteProduct = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        const response = await fetch(`${API_URL}/api/products/${productId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Remove the deleted product from the state
          setProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
          alert("Product deleted successfully!");
        } else {
          alert("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("An error occurred while deleting the product");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between m-1'>
        <span className="text-xl font-bold mb-4">Product List</span>
        <Button onClick={handleAddClick}>Add Product</Button>
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
          {products.length > 0 ? products.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center">{product.name}</td>
              <td className="py-2 px-4 border-b text-center">{product.price}</td>
              <td className="py-2 px-4 border-b text-center">{product.stock}</td>
              <td className="py-2 px-4 border-b text-center">
                <Button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => handleEditClick(product)}>
                  <Edit />
                </Button>
                <Button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteProduct(product._id)}>
                  <Delete />
                </Button>
              </td>
            </tr>
          )) : <tr><td colSpan="5" className="py-2 px-4 border-b text-center">No Product found</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export const productLoader = async () => {
  const response = await fetch(`${API_URL}/api/products`);

  if (!response.ok) {
      throw Error("Could not fetch products.");
  }

  return response.json();
}

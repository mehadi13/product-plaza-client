// src/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { API_URL } from '@/Constant';
import { useNavigate } from 'react-router-dom';
import { Delete, Edit } from 'lucide-react';

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${API_URL}/api/categories`);
      const data = await response.json();
      setCategories(data.results);
      console.log()
    };
    fetchCategories();
  }, []);

  const handleEditClick = (categoryId) => {
    navigate(`/dashboard/categories/edit/${categoryId}`);
  };

  const handleDeleteClick = async (categoryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      const response = await fetch(`${API_URL}/api/categories/${categoryId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCategories(categories.filter(cat => cat._id !== categoryId));
        alert("Category deleted successfully!");
      } else {
        alert("Failed to delete category.");
      }
    }
  };

  return (
    <div>
      <div className='flex justify-between mt-4 mb-4'>
      <h1 className="text-xl font-bold">Categories</h1>
      <Button onClick={() => navigate('/dashboard/categories/new')}>Add Category</Button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories ? categories.map((category, index) => (
            <tr key={category._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center">{category.name}</td>
              <td className="py-2 px-4 border-b text-center">{category.description}</td>
              <td className="py-2 px-4 border-b text-center">
                <Button onClick={() => handleEditClick(category._id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2 h-6 w-6"><Edit/></Button>
                <Button onClick={() => handleDeleteClick(category._id)} className="bg-red-500 text-white px-2 py-1 rounded  h-6 w-6"><Delete/></Button>
              </td>
            </tr>
          )): <>No Category Found</>}
        </tbody>
      </table>
    </div>
  );
}

// src/components/AddEditCategory.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '@/Constant';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function AddEditCategory() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // To get the category ID for editing

  useEffect(() => {
    if (id) {
      const fetchCategory = async () => {
        const response = await fetch(`${API_URL}/api/categories/${id}`);
        const data = await response.json();
        console.log('hmmmm')
        setName(data.name);
        setDescription(data.description);
      };
      fetchCategory();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/api/categories/${id}` : `${API_URL}/api/categories`;

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      alert(id ? 'Category updated successfully!' : 'Category added successfully!');
      navigate('/dashboard/categories');
    } else {
      alert('Error saving category.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 gap-2">
      <h2 className="text-xl font-bold text-center">{id ? 'Edit Category' : 'Add Category'}</h2>
      <div>
        <Label>Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <Label>Description:</Label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <Button type="submit">
        {id ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}

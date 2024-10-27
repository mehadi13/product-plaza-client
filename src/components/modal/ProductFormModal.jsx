import { API_URL } from "@/Constant";
import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";

const ProductFormModal = ({ onClose, onSubmit, product }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    rating: "",
    stock: "",
    image: "",
  });

  const [file, setFile] = useState(null); // For holding the uploaded file
  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { ...form };

    

    try {

        const formData = new FormData();
        formData.append("image", file); // Append the file to FormData
  
        // Include additional product fields in FormData
        for (const key in product) {
          formData.append(key, product[key]);
        }

      let response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An error occurred while saving the product.",
        });
      } else {
        toast({
          variant: "success",
          title: "Success!",
          description: "Product created successfully.",
        });
        onClose(); // Close modal on success
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "An error occurred while saving the product.",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center">
          {product ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            value={form.price}
            onChange={(e) => updateForm({ price: e.target.value })}
            placeholder="Price"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <select
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="electronics">Electronics</option>
            <option value="wearing">Wearing</option>
            <option value="personal-care">Beauty and Personal Care</option>
          </select>
          <input
            type="number"
            value={form.rating}
            onChange={(e) => updateForm({ rating: e.target.value })}
            placeholder="Rating"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            value={form.stock}
            onChange={(e) => updateForm({ stock: e.target.value })}
            placeholder="Stock"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;

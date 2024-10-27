import { API_URL } from "@/Constant";
import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";

const CreateNewProduct = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        rating: "",
        stock: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result); // Set the image preview URL
      };
      fileReader.readAsDataURL(file); // Read the file as a data URL
    }
    };

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const removeImage = () => {
        setImageFile(null); // Clear the image file state
        setImagePreview(null); // Clear the image preview
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("api_key", "a69271f42760ca50404e5999b41227cd");
        formData.append("file", imageFile);

        try {
            const response = await fetch("https://api.imghippo.com/v1/upload", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                return result.data.url; // or the appropriate field with the URL
            } else {
                console.error("Image upload failed:", result.message);
                return null;
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Upload image first
        const imageUrl = await uploadImage();
        if (!imageUrl) {
            alert("Image upload failed. Please try again.");
            return;
        }

        // Prepare the product data with the uploaded image URL
        const productData = {
            ...form,
            image: imageUrl, // Add the image URL to product data
        };

        try {
            const response = await fetch(`${API_URL}/api/products`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });
            if (response.ok) {
                alert("Product created successfully!");
                // Reset form here if needed
            } else {
                alert("Failed to create product");
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">
                Add Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 justify-items-stretch">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                </div>
                {imagePreview && (
                    <div className="relative mb-4">
                        <img src={imagePreview} alt="Product" className="w-full h-48 object-cover rounded" />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                            &times;
                        </button>
                    </div>
                )}
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
                </div>
            </form>
        </div>

    );
};

export default CreateNewProduct
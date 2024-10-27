import { API_URL } from '@/Constant';
import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const location = useLocation();
    const { id } = useParams(); // Get the product ID from the URL params
    const navigate = useNavigate();
    const product = location.state?.product; // Access product from state, with optional chaining

    const [form, setForm] = useState({
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price || "",
        category: product?.category || "",
        rating: product?.rating || "",
        stock: product?.stock || ""
    });

    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (product) {
            setForm({
                name: product.name || "",
                description: product.description || "",
                price: product.price || "",
                category: product.category || "",
                rating: product.rating || "",
                stock: product.stock || ""
            });
            setImage(product.image); // Set the existing product image
        }
    }, [product])

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const uploadImage = async () => {
        if (!imageFile) return null; // Skip upload if no image file
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
                return result.data.url; // Return the uploaded image URL
            } else {
                console.error("Image upload failed:", result.message);
                return null;
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    const handleFileChange = (event) => {
        setImageFile(event.target.files[0]);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result); // Set the new image preview
        };
        fileReader.readAsDataURL(event.target.files[0]); // Read the new file
    };

    const removeImage = () => {
        setImage(null); // Clear the image
        setImageFile(null); // Clear the file input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        // Upload image first if there's a new one
        const imageUrl = await uploadImage();
        const finalImageUrl = imageUrl || image; // Use new image URL or previous one

        const productData = {
            ...form,
            image: finalImageUrl, // Add the image URL to product data
        };

        try {
            const response = await fetch(`${API_URL}/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            // Optionally handle success here
            navigate('/'); // Redirect to the product list or another page
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show an error message to the user)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
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
                {/* Display existing image with a cross button */}
                {image && (
                    <div className="relative mb-4">
                        <img src={image} alt="Product" className="w-full h-48 object-cover rounded" />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                            &times;
                        </button>
                    </div>
                )}

                {/* File input for uploading a new image */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required={!image} // Make required if no image is uploaded yet
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

export default EditProduct;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/Constant";
import { toast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";
import { categoryLoader } from "../category/loader";

const CreateProduct = () => {
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
    const [categories, setCategories] = useState([])

    useEffect( ()=>{
        const categories =  categoryLoader()
        setCategories(categories)
    }, [])

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
                Add Product {categories?categories.length:<></>}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 justify-items-stretch">
                <div>
                    <Label>Name</Label>
                <Input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
                <div>
                    <Label>Description</Label>
                    <Textarea
                    value={form.description}
                    onChange={(e) => updateForm({ description: e.target.value })}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <Label>Price</Label>
                        <Input
                        type="number"
                        value={form.price}
                        onChange={(e) => updateForm({ price: e.target.value })}
                        placeholder="Price"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <div>
                        <Label>Category</Label>
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <Label>Raiting</Label>
                        <Input
                        type="number"
                        value={form.rating}
                        onChange={(e) => updateForm({ rating: e.target.value })}
                        placeholder="Rating"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    </div>
                    <div>
                        <Label>Stock</Label>
                        <Input
                        type="number"
                        value={form.stock}
                        onChange={(e) => updateForm({ stock: e.target.value })}
                        placeholder="Stock"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    </div>
                </div>
                <div>
                    <Label>Product Image</Label>
                    {imagePreview && (
                    <div className="relative mb-4">
                        <img src={imagePreview} alt="Product" className="object-cover rounded" />
                        <Button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                            &times;
                        </Button>
                    </div>
                )}
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                />
                </div>
                <Button
                        type="submit"
                    >
                        Save
                    </Button>
                
            </form>
        </div>

    );
};

export default CreateProduct
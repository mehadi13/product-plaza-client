const API_URL = "http://localhost:5000/api/products"; // Replace with your actual API URL

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Create a new product
export const createProduct = async (productData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error("Failed to create product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating product:", error);
        return null;
    }
};

// Update an existing product
export const updateProduct = async (id, productData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        if (!response.ok) {
            throw new Error("Failed to update product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating product:", error);
        return null;
    }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete product");
        }
        return await response.json();
    } catch (error) {
        console.error("Error deleting product:", error);
        return null;
    }
};

import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";
import ProductFormModal from "@/components/modal/ProductFormModal";
import ProductTable from "@/components/modal/ProductTable";
import { fetchProducts, updateProduct, deleteProduct, createProduct } from "@/services/productService";
import React, { useState, useEffect } from "react";


const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    const handleCreateOrUpdate = async (productData) => {
        if (selectedProduct) {
            const updatedProduct = await updateProduct(selectedProduct.id, productData);
            setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
        } else {
            const newProduct = await createProduct(productData);
            setProducts([...products, newProduct]);
        }
        setShowFormModal(false);
        setSelectedProduct(null);
    };

    const handleDelete = async () => {
        await deleteProduct(selectedProduct.id);
        setProducts(products.filter((p) => p.id !== selectedProduct.id));
        setShowDeleteModal(false);
        setSelectedProduct(null);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
            <button 
                onClick={() => setShowFormModal(true)} 
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add Product
            </button>
            <ProductTable 
                products={products} 
                onEdit={(product) => { setSelectedProduct(product); setShowFormModal(true); }} 
                onDelete={(product) => { setSelectedProduct(product); setShowDeleteModal(true); }} 
            />
            {showFormModal && (
                <ProductFormModal 
                    onClose={() => setShowFormModal(false)} 
                    onSubmit={handleCreateOrUpdate} 
                    product={selectedProduct} 
                />
            )}
            {showDeleteModal && (
                <DeleteConfirmationModal 
                    onClose={() => setShowDeleteModal(false)} 
                    onConfirm={handleDelete} 
                />
            )}
        </div>
    );
}

export default Dashboard
import React from "react";

const DeleteConfirmationModal = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete this product?</p>
                <div className="flex justify-end space-x-2 mt-4">
                    <button 
                        onClick={onConfirm} 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Yes
                    </button>
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;

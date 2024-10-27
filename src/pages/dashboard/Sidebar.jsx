import React from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router for navigation

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-4 bg-gray-800 text-white w-64">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav className="flex flex-col">
        <NavLink
          to="/"
          className="p-2 mb-2 rounded hover:bg-gray-700"
          activeClassName="bg-gray-600"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="p-2 mb-2 rounded hover:bg-gray-700"
          activeClassName="bg-gray-600"
        >
          Products
        </NavLink>
        <NavLink
          to="/orders"
          className="p-2 mb-2 rounded hover:bg-gray-700"
          activeClassName="bg-gray-600"
        >
          Orders
        </NavLink>
        <NavLink
          to="/customers"
          className="p-2 mb-2 rounded hover:bg-gray-700"
          activeClassName="bg-gray-600"
        >
          Customers
        </NavLink>
        <NavLink
          to="/settings"
          className="p-2 mb-2 rounded hover:bg-gray-700"
          activeClassName="bg-gray-600"
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

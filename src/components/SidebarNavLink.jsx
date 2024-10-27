import React from "react";
import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ to, icon: Icon, label }) => (
  <NavLink
  to={to}
  end // This ensures that the link is only active when it matches the path exactly
  className={({ isActive }) =>
    `flex items-center p-2 rounded ${
      isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700"
    }`
  }
>
  {Icon && <Icon className="mr-2" />}
  <span>{label}</span>
</NavLink>
);

export default SidebarNavLink;

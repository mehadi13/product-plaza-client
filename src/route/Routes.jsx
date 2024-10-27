import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";

import RootLayout from "../layouts/RootLayout";
import Home from "@/pages/home/Home";
// import { imageLoader } from "@/pages/home/Sample";
import NotFound from "@/pages/NotFound";
import UnderDev from "@/pages/UnderDev";
import DashboardLayout from "@/layouts/DashboardLayout";
import AdminDashboard from "@/pages/dashboard/Dashboard";
import CreateProduct from "@/pages/dashboard/product/CreateProduct";
import { productLoader, ProductsList } from "@/pages/dashboard/product/ProductsList";
import EditProduct from "@/pages/dashboard/product/EditProduct";
import { CategoryList } from "@/pages/dashboard/category/CategoryList";
import { AddEditCategory } from "@/pages/dashboard/category/AddEditCategory";
import { categoryLoader } from "@/services/category";
import Products, { productFilter } from "@/pages/product/Products";
import ProductDetails from "@/pages/ProductDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: categoryLoader
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UnderDev />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/details/:id",
        element: (<PrivateRoute>
          <ProductDetails/>
        </PrivateRoute>),
        loader: productFilter,
      },
      {
        path: "/products/:category",
        element: <Products />,
        loader: productFilter,
      },
      {
        path: "/dev",
        element: <UnderDev/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        )
      },
      {
        path: "/dashboard/products",
        element: (
          <PrivateRoute>
            <ProductsList />
          </PrivateRoute>
        ),
        loader: productLoader
      },
      {
        path: "/dashboard/products/new",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        )
      },
      {
        path: "/dashboard/products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        )
      },
      {
        path: "/dashboard/categories",
        element: (
          <PrivateRoute>
            <CategoryList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/categories/new",
        element: (
          <PrivateRoute>
            <AddEditCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/categories/edit/:id",
        element: (
          <PrivateRoute>
            <AddEditCategory />
          </PrivateRoute>
        ),
      },
    ]
  }
]);

export default routes;

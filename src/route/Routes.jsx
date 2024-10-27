import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";

import RootLayout from "../layouts/RootLayout";
import Home from "@/pages/home/Home";
import CourseDetails, { courseDetailsLoader } from "@/pages/secured/CourseDetails";
import Courses, { courseLoader } from "@/pages/secured/products/Courses";
// import { imageLoader } from "@/pages/home/Sample";
import NotFound from "@/pages/NotFound";
import UnderDev from "@/pages/UnderDev";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import AdminDashboard from "@/pages/dashboard/Dashboard";
import CreateNewProduct from "@/pages/dashboard/products/CreateProduct";
import { productLoader, ProductsList } from "@/pages/dashboard/products/ProductsList";
import CreateProduct from "@/pages/dashboard/products/CreateProduct";
import EditProduct from "@/pages/dashboard/products/EditProduct";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: imageLoader
      },
      {
        path: "/products/:category",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        loader: courseLoader
      },
      {
        path: "/products/:category/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
        loader: courseDetailsLoader
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
            <CreateNewProduct />
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
      }
    ]
  }
]);

export default routes;

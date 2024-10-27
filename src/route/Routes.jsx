import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";

import RootLayout from "../layouts/RootLayout";
import Home from "@/pages/home/Home";
import CourseDetails, { courseDetailsLoader } from "@/pages/secured/CourseDetails";
import Courses, { courseLoader } from "@/pages/secured/products/Courses";
import { imageLoader } from "@/pages/home/Sample";
import NotFound from "@/pages/NotFound";
import UnderDev from "@/pages/UnderDev";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import CreateNewProduct from "@/pages/dashboard/CreateNewProduct";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: imageLoader
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        loader: courseLoader
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
    path: "/admin",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
        loader: courseLoader
      },
      {
        path: "/admin/new",
        element: (
          <PrivateRoute>
            <CreateNewProduct />
          </PrivateRoute>
        ),
        loader: courseLoader
      }
    ]
  }
]);

export default routes;

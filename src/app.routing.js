import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./modules/auth/Auth";
import Login from "./modules/auth/login/Login";
import ForgotPassword from "./modules/auth/components/ForgotPassword";
import ResetPassword from "./modules/auth/components/ResetPassword";
import ThemeLayout from "./theme/ThemeLayout";
import Dashboard from "./modules/dashboard/Dashboard";
import ProductLayout from "./modules/products/Product";
import ProductTable from "./modules/products/components/product-table/ProductTable";
import AddProduct from "./modules/products/components/add-product/AddProduct";
import SupplierLayout from "./modules/suppliers/Suppliers";
import Supplier from "./modules/suppliers/components/StockTable";
import AddStock from "./modules/suppliers/components/AddStock";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/",
    element: <ThemeLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/product",
        element: <ProductLayout />,
        children: [
          { path: "/product", element: <ProductTable /> },
          { path: "/product/add-product", element: <AddProduct /> },
        ],
      },
      {
        path: "/",
        element: <SupplierLayout />,
        children: [
          { path: "/supplier", element: <Supplier /> },
          {
            path: "/supplier/add-stock",
            element: <AddStock />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;

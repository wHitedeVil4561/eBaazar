import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Supplier from "./modules/suppliers/components/supplier-mainscreen/SupplierMainscreen";
import AddProduct from "./modules/products/components/add-product/AddProduct";
import ProductLayout from "./modules/products/Product";
import Login from "./modules/auth/login/Login";
import Dashboard from "./modules/dashboard/Dashboard";
import SupplierLayout from "./modules/suppliers/Suppliers";
import AddStock from "./modules/suppliers/components/add-stock/AddStock";
import ThemeLayout from "./theme/ThemeLayout";
import ProductTable from "./modules/products/components/product-table/ProductTable";



const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
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

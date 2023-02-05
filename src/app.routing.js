import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./modules/auth/Auth";
import Login from "./modules/auth/login/Login";
import ForgotPassword from "./modules/auth/components/ForgotPassword";
import ResetPassword from "./modules/auth/components/ResetPassword";
import ThemeLayout from "./theme/ThemeLayout";
import Dashboard from "./modules/dashboard/Dashboard";
import ProductLayout from "./modules/products/Product";
import ProductTable from "./modules/products/components/ProductTable";
import AddProduct from "./modules/products/components/AddProduct";
import SupplierLayout from "./modules/suppliers/Suppliers";
import SupplierTable from "./modules/suppliers/components/StockTable";
import AddStock from "./modules/suppliers/components/AddStock";
import Header from "./theme/components/Header";
import BillingLayout from "./modules/billing/Billing";
import CustomersLayout from "./modules/customers/Customer";
import CustomersTable from "./modules/customers/components/CustomerTable";
import AddCustomer from "./modules/customers/components/AddCustomer";

const appRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/forgot-password", element: <ForgotPassword /> },
      { path: "/auth/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/app",
    element: <ThemeLayout />,
    children: [
      { path: "/app/dashboard", element: <Dashboard /> },
      {
        path:'/app/billing',element:<BillingLayout/>,children:[
          // {path:"/app/billing/retail-sale"}
        ]
      },
      {
        path:"/app/customers",element:<CustomersLayout/>,children:[
          {path:"/app/customers/list",element:<CustomersTable/>},
          {path:'/app/customers/add-customer',element:<AddCustomer/>}
        ]
      },
      {
        path: "/app/product",
        element: <ProductLayout />,
        children: [
          { path: "/app/product/list", element: <ProductTable /> },
          { path: "/app/product/add-product", element: <AddProduct /> },
        ],
      },
      {
        path: "/app/supply",
        element: <SupplierLayout />,
        children: [
          { path: "/app/supply/list", element: <SupplierTable /> },
          {
            path: "/app/supply/add-stock",
            element: <AddStock />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;

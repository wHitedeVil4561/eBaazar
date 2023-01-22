import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./shared/components/Header/Header";
import Supplier from "./modules/suppliers/components/supplier-mainscreen/SupplierMainscreen";
import Product from "./modules/products/components/product-mainscreen/ProductMainscreen";
import AddProduct from "./modules/products/components/add-product/AddProduct";
import ProductLayout from "./modules/products/Product";
import Login from "./modules/auth/login/Login";
import "./app.scss";
import Dashboard from "./modules/dashboard/Dashboard";

const Applayout = () => {
  return (
    <div className="main">
      <Header className="header" />
      <div className="router">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/product",
        element: <ProductLayout />,
        children:[
            {path:'/product',element:<Product/>},
            {path:'/product/add-product',element:<AddProduct/>}
        ]
      },
      { path: "/supplier", element: <Supplier /> },
    ],
  },
]);

export default appRouter;

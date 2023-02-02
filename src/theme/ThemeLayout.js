import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./ThemeLayout.scss";
import logo from "../assets/img/bag.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import profile_image_path from "../assets/img/profile-circle.png";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Header from "./components/Header"
import Topnav from "../shared/components/Header/Topnav";
const eBaazar = "eBaazar";
const Dashboard = "Dashboard";
const billing = "Billing";
const products = "Products";
const customers = "Customers";
const suppliers = "Suppliers";
const ThemeLayout = () => {
  const PAGE_TITLE = "Product Screen";
  const NAME = "Sumit Gupta";
  const [darkTheme, setDarkTheme] = useState(false);
  const ChangeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const role = "Admin";
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="bg-neu-light flex">
      <Header />
      <Topnav />
      <Outlet />
    </div>
  );
};

export default ThemeLayout;

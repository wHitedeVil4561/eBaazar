import "./Header.scss";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import logo from "../../../assets/img/bag.png";
import profile_image_path from "../../../assets/img/profile-circle.png";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
const eBaazar = "eBaazar";
const Dashboard = "Dashboard";
const billing = "Billing";
const products = "Products";
const customers = "Customers";
const suppliers = "Suppliers";
const MobileView = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <img src={logo} />
        {eBaazar}
      </div>
      <div className="flex justify-between absolute bottom-0 left-0">
        <div className="flex flex-col gap-2">
          <DashboardIcon />
          {Dashboard}
        </div>
        <div className="flex flex-col gap-2">
          <ReceiptOutlinedIcon />
          {billing}
        </div>
        <div className="flex flex-col gap-2">
          <InventoryIcon />
          {products}
        </div>
        <div className="flex flex-col gap-2">
          <GroupsIcon />
          {customers}
        </div>
        <div className="flex flex-col gap-2">
          <LocalShippingIcon />
          {suppliers}
        </div>
      </div>
    </div>
  );
};
const TabletView = () => {};
const DestopView = () => {
  return (
    <div className="sidenav flex flex-col items-center gap-10 py-5 px-8 bg-light-white">
      <div className="flex items-center gap-4">
        <div className="">
          <img src={logo} style={{ width: "90px", height: "40px" }} />
        </div>
        <div className="text-4xl text-blue">{eBaazar}</div>
      </div>
      <div className="flex flex-col gap-5 text-2xl text-fade-color font-medium">
        <div className="flex items-center gap-4 cursor-pointer">
          <DashboardIcon sx={{ fontSize: "32px" }} />
          {Dashboard}
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <ReceiptOutlinedIcon sx={{ fontSize: "32px" }} />
          {billing}
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <InventoryIcon sx={{ fontSize: "32px" }} />
          {products}
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <GroupsIcon sx={{ fontSize: "32px" }} />
          {customers}
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <LocalShippingIcon sx={{ fontSize: "32px" }} />
          {suppliers}
        </div>
      </div>
    </div>
  );
};

const Header = ({ width }) => {
  console.log(width);
  // const [isDestop, setDestopView] = useState(0);
  // const [isMobile, setMobileView] = useState(0);
  // if (width > 768) {
  //   setDestopView(1);
  // } else {
  //   setMobileView(1);
  // }
  return (
    <DestopView/>
  );
};

export default Header;

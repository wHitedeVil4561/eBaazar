import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./ThemeLayout.scss";
import profile_image_path from "../assets/img/profile-circle.png";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Header from "../shared/components/Header/Header";
const ThemeLayout = () => {
  const PAGE_TITLE = "Product Screen";
  const NAME = "Sumit Gupta";
  const [darkTheme, setDarkTheme] = useState(false);
  const ChangeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const role = "Admin";
  return (
    <div className="main">
      <Header className="header" />
      <div className="screen">
        <div className="sub-header">
          <h1 className="page-title">{PAGE_TITLE}</h1>
          <div className="corner-header">
            <img src={profile_image_path} className="profile-img" />
            <div className="role-type">
              {NAME} <br />
              {role}
            </div>
            <LanguageIcon className="button" />
            <button onClick={ChangeTheme} className="button">
              {darkTheme ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ThemeLayout;

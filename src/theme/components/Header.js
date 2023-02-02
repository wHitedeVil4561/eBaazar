import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import logo from "../../assets/img/bag.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const changeTheme = (value)=>{
    console.log(value);
    setDarkTheme(value)
  }
  return (
    <div className="w-full flex justify-between items-center py-4 w-95 m-auto">
      <div className="logo flex gap-5">
        <img src={logo}></img>
        <span className="text-3xl">eBaazar</span>
      </div>
      <div className="">
        <div className="">
          <AccountCircleIcon />
        </div>
        <LanguageIcon />
        {darkTheme && <DarkModeIcon onClick={() => changeTheme(false)} />}
        {!darkTheme && <LightModeIcon onClick={() => changeTheme(true)} />}
      </div>
    </div>
  );
};

export default Header;

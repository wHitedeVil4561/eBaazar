import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n/locales/config";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/img/bag.png";
const Header = () => {
  const changeLanguage = (lngCode) =>{
    i18n.changeLanguage(lngCode)
  }
  const { t } = useTranslation();
  const [darkTheme, setDarkTheme] = useState(true);
  const changeTheme = (value) => {
    console.log(value);
    setDarkTheme(value);
  };
  return (
    <div className="shadow-lg w-full bg-white sticky top-0">
      <div className="flex justify-between items-center py-3  w-95 mx-auto  ">
        <div className="logo flex items-center  gap-5">
          <img src={logo}></img>
          <span className="text-4xl font-bold text-blue font-lato">
            {t('eBaazar')}
          </span>
        </div>
        <div className="flex gap-5">
          <div className="">
            <AccountCircleIcon style={{ fontSize: 32, cursor: "pointer" }} />
          </div>
          <LanguageIcon style={{ fontSize: 32, cursor: "pointer" }} onClick = {()=>changeLanguage('hi')} />
          {darkTheme && (
            <DarkModeIcon
              style={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => changeTheme(false)}
            />
          )}
          {!darkTheme && (
            <LightModeIcon
              style={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => changeTheme(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./ThemeLayout.scss";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

const ThemeLayout = () => {
  
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
    <div className="bg-neu-light min-h-screen flex flex-col gap-5">
      <Header />
      <div className="screen w-95 mx-auto flex gap-8">
        <div className="sidenav flex items-center">
          <Sidenav />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ThemeLayout;

import React from "react";
import { useTranslation } from "react-i18next";
import dashboard from "../../assets/img/dashboard.png";
import billing from "../../assets/img/bill.png";
import customers from "../../assets/img/customers.png";
import product from "../../assets/img/product.png";
import supply from "../../assets/img/supply.jpg";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-5 gap-5 bg-blue rounded-xl h-fit sticky top-24">
      <Link to={"dashboard"}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={dashboard} className="w-12 h-12"></img>
          <span className="text-white">{t("DASHBOARD")}</span>
        </div>
      </Link>
      <Link to={"billing"}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={billing} className="w-12 h-12"></img>
          <span className="text-white">{t("BILLING")}</span>
        </div>
      </Link>
      <Link to={"customers/list"}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={customers} className="w-12 h-12"></img>
          <span className="text-white">{t("CUSTOMERS")}</span>
        </div>
      </Link>

      <Link to={"product/list"}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={product} className="w-12 h-12"></img>
          <span className="text-white">{t("PRODUCTS")}</span>
        </div>
      </Link>
      <Link to={"supply/list"}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={supply} className="w-12 h-12"></img>
          <span className="text-white">{t("STOCK")}</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidenav;

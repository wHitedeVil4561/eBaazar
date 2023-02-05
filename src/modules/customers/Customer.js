import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const CustomersLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex bg-white shadow-md p-3 rounded-md justify-between items-center w-full ">
        <span className="font-comic font-bold text-2xl text-dark-blue">
          {t("CUSTOMERS")}
        </span>

        <div className="flex gap-5">
          <input
            className="rounded-full min-w-[240] px-5 outline-none border border-input-border"
            placeholder={t("SEARCH_CUSTOMERS")}
          />
          <button className="flex items-center gap-3 bg-light-orange py-2 px-5 rounded-lg text-white font-roboto font-medium">
            <AddCircleOutlineIcon />
            {t("ADD_CUSTOMER")}
          </button>

          <button className="flex items-center p-2 bg-blue text-white rounded-full">
            <CloudDownloadIcon />
          </button>
        </div>
      </div>
      <Outlet className="max-w-full" />
    </div>
  );
};
export default CustomersLayout;

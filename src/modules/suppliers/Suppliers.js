import React from "react";

import { Outlet } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const SupplierLayout = () => {
  const ADD_STOCK = "Add Stock";
  const ADD_SUPPLIER = "Add Supplier";
  const DOWNLOAD = "Download";
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button className="flex place-items-center gap-3 px-5 py-2 bg-sky-blue text-white font-semibold text-xl rounded-xl">
            <AddCircleOutlineIcon />
            {ADD_STOCK}
          </button>
          <button className="flex place-items-center gap-3 px-5 py-2 bg-pink text-white font-semibold text-xl rounded-xl">
            <AddCircleOutlineIcon />
            {ADD_SUPPLIER}
          </button>
        </div>
        <div className="flex gap-5">
          <input
            className="rounded-xl w-80 px-5"
            placeholder="Search supplier"
          />
          <button className="rounded-full bg-blue px-5 py-2 text-white flex gap-3 text-xl font-semibold place-items-center">
            <CloudDownloadIcon />
            {DOWNLOAD}
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SupplierLayout;

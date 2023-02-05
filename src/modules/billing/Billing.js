import React, { useMemo, useState } from "react";
import Radio from "@mui/material/Radio";
import { useTranslation } from "react-i18next";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
let rupee = require("../../assets/img/rupee.png");
const BillingLayout = () => {
  const { t } = useTranslation();
  const [retaileSale, setRetaileSale] = React.useState(true);

  const handleChange = (saleType) => {
    setRetaileSale(saleType);
  };
  const columns = [
    { id: "upc_code", label: t("UPC_CODE") },
    { id: "productName", label: t("PRODUCT_NAME") },
    { id: "mrp", label: t("MRP") },
    { id: "quantity", label: t("QUANTITY") },
    { id: "discount", label: t("DISCOUNT") },
    { id: "salePrice", label: t("SALE_PRICE") },
    { id: "total", label: t("TOTAL") },
    { id: "remove", label: t("REMOVE") },
  ];
  const [rows, setRows] = useState([
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
    {
      upc_code: 1212718927,
      productName: "Dettol cake 39g 10rs",
      quantity: 1,
      mrp: 10,
      discount: 2,
      salePrice: 8,
      total: 8,
    },
  ]);
  const [totalCount,setTotalCount] = useState(rows.length);

  const calculateTotal = ()=>{
    let total =0;
    rows.forEach((row)=>{
      total+=row.total
    });
    return total
  }
  const caculateTotalDiscount = ()=>{
    let discount = 0;
    rows.forEach((row)=>{
      discount+=row.discount
    });
    return discount;
  }
  const calculateSubTotal = ()=>{
    return grandTotal + discountTotal;
  }
  const discountTotal = useMemo(()=>caculateTotalDiscount(),[rows])
  const grandTotal = useMemo(()=>calculateTotal(),[rows])
  const subTotal= useMemo(()=>calculateSubTotal(),[grandTotal])
  const onchangeQty = (i, isIncrement) => {
    if (isIncrement) {
      setRows(
        Object.values({
          ...rows,
          [i]: {
            ...rows[i],
            quantity: ++rows[i].quantity,
            total: rows[i].salePrice * rows[i].quantity,
          },
        })
      );
      return;
    }
    if (rows[i].quantity >= 2)
      setRows(
        Object.values({
          ...rows,
          [i]: {
            ...rows[i],
            quantity: --rows[i].quantity,
            total: rows[i].salePrice * rows[i].quantity,
          },
        })
      );
  };

  const onRemoveItem = (i)=>{
    let temprows = [...rows];
    temprows.splice(i,1)
    setRows(temprows);
    setTotalCount(temprows.length)
  }
  const onReset = ()=>{
    setRows([]);
    setTotalCount(0)
  }

  return (
    <div className="w-full flex flex-col gap-5 mb-10">
      <div className="w-full flex gap-5">
        <div className="searc-product flex flex-col gap-5 bg-light-white shadow-md p-5 rounded-xl w-3/4">
          <div className="flex justify-between items-center">
            <span className="font-comic font-bold text-2xl text-dark-blue">
              {t("BILLING")}
            </span>
            <div className="flex gap-3">
              <button className="bg-blue px-5 py-2 rounded-md text-white">
                {t("PRINT_LAST_INVOICE")}
              </button>
              <button className="bg-blue px-5 py-2 rounded-md text-white">
                {t("LAST_INVOICE")}
              </button>
            </div>
          </div>

          <div className="">
            <input
              className="h-10 bg-neu-light border border-input-border rounded-lg w-full outline-none px-5 text-xl"
              placeholder={t("SEARCH_PRODUCTS")}
            />
          </div>
          <div className="flex gap-5">
            <input
              className="h-10 bg-neu-light border border-input-border rounded-lg w-1/3 outline-none px-5 text-xl"
              placeholder={t("CUSTOMER_NAME")}
            />
            <input
              className="h-10 bg-neu-light border border-input-border rounded-lg w-1/3 outline-none px-5 text-xl"
              placeholder={t("MOBILE_NO")}
            />
            <input
              className="h-10 bg-neu-light border border-input-border rounded-lg w-1/3 outline-none px-5 text-xl"
              placeholder={t("ADDRESS")}
            />
          </div>
        </div>
        <div className="total-card flex flex-col gap-1 w-1/4 items-center">
          <div className="flex">
            <div className="flex items-center">
              <Radio
                checked={retaileSale}
                onChange={() => handleChange(true)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
              <span
                className="cursor-pointer text-base"
                onClick={() => handleChange(true)}
              >
                {t("RETAILSALE")}
              </span>
            </div>
            <div className="flex items-center">
              <Radio
                checked={!retaileSale}
                onChange={() => handleChange(false)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
              <span
                className="cursor-pointer text-base"
                onClick={() => handleChange(false)}
              >
                {t("WHOLESALE")}
              </span>
            </div>
          </div>
          <div className="bg-light-orange shadow-md flex items-center justify-evenly w-full h-full rounded-xl text-white font-lato font-bold text-xl">
            <div className="flex flex-col items-center gap-3">
              <span>{t("ITEMS")}</span>
              <span>{totalCount}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span>{t("GRAND_TOTAL")}</span>
              <span>{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice-table w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-neu-light">
              {columns.map((col) => {
                return (
                  <th key={col.id} className="text-center border p-2">
                    {col.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              return (
                <tr>
                  <td className="border p-2">{row.upc_code}</td>
                  <td className="border p-2">{row.productName}</td>
                  <td className="border p-2 text-right">{row.mrp}</td>
                  <td className="border p-2">
                    <div className="flex justify-between">
                      <IndeterminateCheckBoxIcon
                        className="cursor-pointer"
                        onClick={() => onchangeQty(i, false)}
                      />
                      <input
                        value={row.quantity}
                        className="w-10 text-center bg-transparent outline-none"
                      />
                      <AddBoxIcon
                        className="cursor-pointer"
                        onClick={() => onchangeQty(i, true)}
                      />
                    </div>
                  </td>
                  <td className="border p-2 text-right">{row.discount}</td>
                  <td className="border p-2 text-right">{row.salePrice}</td>
                  <td className="border p-2 text-right">{row.total}</td>
                  <td className="border text-center">
                    <DeleteForeverIcon className="cursor-pointer" onClick = {()=>onRemoveItem(i)} />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="total-table w-full border">
        <div className="flex border-b">
          <span className="w-3/4 p-2 text-right border-r">
            {t("SUB_TOTAL")}
          </span>
          <span className="w-1/4 p-2 text-right">{subTotal}</span>
        </div>
        <div className="flex border-b">
          <span className="w-3/4 p-2 text-right border-r">
            {t("TOTAL_DISCOUNT")}
          </span>
          <span className="w-1/4 p-2 text-right">{discountTotal}</span>
        </div>

        <div className="flex border-b">
          <span className="w-3/4 p-2 text-right border-r">
            {t("DELIEVERY_CHARGE")}
          </span>
          <span className="w-1/4 p-2 text-right">0</span>
        </div>
        <div className="flex border-b">
          <span className="w-3/4 p-2 text-right border-r">
            {t("GRAND_TOTAL")}
          </span>
          <div className="flex justify-between pr-2 w-1/4 items-center">
            <div className="bg-neu-light h-full flex justify-center items-center p-2">
              <img src={rupee} className="w-5 h-5 "></img>
            </div>
            <span className="w-1/4 text-right">{grandTotal}</span>
          </div>
        </div>
        <div className="flex border-b">
          <span className="w-3/4 p-2 text-right border-r">{t("PAYMENT")}</span>
          <div className="flex justify-between pr-2 w-1/4 items-center">
            <div className="bg-neu-light h-full flex justify-center items-center p-2">
              <img src={rupee} className="w-5 h-5 "></img>
            </div>
            <span className="w-1/4 text-right">6732328</span>
          </div>
          {/* <span className="w-1/4 p-2 text-right">6732328</span> */}
        </div>
        <div className="flex ">
          <span className="w-3/4 p-2 text-right border-r">
            {t("TOTAL_DUE")}
          </span>
          <div className="flex justify-between pr-2 w-1/4 items-center">
            <div className="bg-neu-light h-full flex justify-center items-center p-2">
              <img src={rupee} className="w-5 h-5 "></img>
            </div>
            <span className="w-1/4 text-right">6732328</span>
          </div>
          {/* <span className="w-1/4 p-2 text-right">6732328</span> */}
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <button className="py-2 min-w-[140] text-white text-xl bg-light-orange rounded-lg tracking-wider font-medium">
          {t("LEND")}
        </button>
        <button className="py-2 min-w-[140] text-white text-xl bg-blue-hues rounded-lg tracking-wider font-medium" onClick={()=>onReset()}>
          {t("RESET")}
        </button>
        <button className="py-2 min-w-[140] text-white text-xl bg-light-green rounded-lg tracking-wider font-medium">
          {t("PRINT")}
        </button>
      </div>
    </div>
  );
};
export default BillingLayout;

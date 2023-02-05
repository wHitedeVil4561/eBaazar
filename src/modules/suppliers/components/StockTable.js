import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Filter from "../../../shared/components/Filter";
const columns = [
  { id: "index", label: "S.No.", minWidth: 80, align: "center" },
  { id: "dealerName", label: "Dealer Name", minWidth: 150 },
  { id: "invoiceNumber", label: "Invoice Number", minWidth: 160 },
  { id: "grandTotal", label: "Grand Total", minWidth: 150 },
  { id: "purchaseDate", label: "Purchase Date", minWidth: 150 },
  { id: "dueAmount", label: "Due Amount", minWidth: 150 },
  {
    id: "lastPaymentDate",
    label: "Last Payment Date",
    minWidth: 200,
    align: "center",
  },
  {
    id: "invoiceImage",
    label: "Invoice Image",
    minWidth: 150,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];
const data = [
  {
    index: 1,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 2,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 3,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 4,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 5,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 6,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 7,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 8,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 9,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 10,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
  {
    index: 11,
    dealerName: "Sunil Gupta",
    invoiceNumber: "SU123948394",
    grandTotal: "47834932",
    purchaseDate: "23-1-2023",
    dueAmount: "47834932",
    lastPaymentDate: "23-1-2023",
  },
];
const formateCurrency = (value) => {
  return Number(value).toLocaleString("en-IN");
};
const SupplierTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const filterOptions = [
    { label: "Brand", placeholder: "Select Brand" },
    { label: "Category", placeholder: "Select Category" },
    { label: "Cost", placeholder: "Select Cost-range" },
    { label: "Quantity", placeholder: "Select quantity" },
  ];
  return (
    <div className="flex flex-col w-full gap-5">
      <Filter filterOptions={filterOptions}/>
      <div className=" rounded-t-xl overflow-auto  max-w-[500] min-w-full  ">
        <table className="table-auto min-w-full  ">
          <thead>
            <tr className="bg-blue text-white">
              {columns.map((column) => {
                return (
                  <td
                    className="p-4 font-semibold tracking-wide"
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      textAlign: column.align,
                    }}
                  >
                    {column.label}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr className=" border-b bg-white">
                  <td className="p-4 font-regular tracking-wide text-center">
                    {row.index}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.dealerName}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.invoiceNumber}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {formateCurrency(row.grandTotal)}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.purchaseDate}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {formateCurrency(row.dueAmount)}
                  </td>
                  <td className="p-4 font-regular tracking-wide text-center">
                    {row.lastPaymentDate}
                  </td>
                  <td className="p-4 font-regular tracking-wide text-center">
                    <MoreHorizIcon className="cursor-pointer" />
                  </td>
                  <td className="p-4 font-regular tracking-wide text-center">
                    <button
                      className="cursor-pointer"
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "resources-button",
                        backgroundColor: "#FFFFFF",
                      }}
                      PaperProps={{
                        style: {
                          borderRadius: 10,
                          backgroundColor: "#FFFFFF",
                          boxShadow:'none',
                          width:'150px'
                        },
                      }}
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Payment</MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                    </Menu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SupplierTable;


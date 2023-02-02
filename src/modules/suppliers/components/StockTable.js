import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Filter from "../../../shared/components/Filter/Filter";

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
const Supplier = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex flex-col gap-5">
      <Filter />
      <div className=" rounded-t-xl">
        <table className="table-auto">
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
export default Supplier;
{/* <Menu
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
    },
  }}
  style={{
    marginTop: 52,
    backgroundColor: "rgba(0, 0, 0, 0.27)",
  }}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
>
  <MenuItem onClick={onPressApprove}>
    <img src={images.singleTickIcon} alt="" className={styles.singleTickIcon} />
    <p className={styles.approveTextStyle}>Approve</p>
  </MenuItem>
  <MenuItem onClick={handleClose}>
    <img src={images.crossIcon} alt="" className={styles.crossIcon} />
    <p className={styles.rejectTextStyle}>Reject</p>
  </MenuItem>
  <MenuItem onClick={handleClose}>
    <img src={images.doubleTickIcon} alt="" className={styles.doubleTickIcon} />
    <p className={styles.approvedWithChangesTextStyle}>Approved with changes</p>
  </MenuItem>
  <MenuItem style={{ alignItems: "flex-start" }} onClick={handleClose}>
    <img
      src={images.moreDetailsImage}
      alt=""
      className={styles.moreDetailsImageStyle}
    />
    <div>
      <p className={styles.viewMaintenanceTextStyle}>View maintenance bill, </p>
      <p className={styles.viewMaintenanceTextStyle}>note & details</p>
    </div>
  </MenuItem>
</Menu>; */}

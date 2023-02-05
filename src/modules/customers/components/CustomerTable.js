import React,{useState} from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Filter from "../../../shared/components/Filter";
import { useTranslation } from "react-i18next";
const CustomersTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();
  const columns = [
    { id: "index", label: t("S.NO."), minWidth: 80, align: "center" },
    { id: "customerName", label: t("CUSTOMER_NAME"), minWidth: 150 },
    { id: "mobileNo", label: t("MOBILE_NO"), minWidth: 160 },
    { id: "dueAmount", label: t("DUE_AMOUNT"), minWidth: 150 },
    { id: "lastPurchaseDate", label: t("LAST_PURCHASE_DATE"), minWidth: 150 },
    { id: "lastPaymentDate", label: t("LAST_PAYMENT_DATE"), minWidth: 150 },
    { id: "action", label: t("ACTION"), minWidth: 100 },
  ];
  const rows = [
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
    {
      index: 1,
      customerName: "Sumit Gupta",
      mobileNo: 8394209203,
      dueAmount: 43938,
      lastPurchaseDate: "12-1-23",
      lastPaymentDate: "12-12-23",
    },
  ];
  const filterOptions = [
    { label: "Cost-Range", placeholder: "Select cost-range" },
    { label: "Village", placeholder: "Enter village-name" },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Filter filterOptions={filterOptions} />
      <div className="customer-table min-w-full overflow-auto rounded-md">
        <table className="min-w-full max-w-[500] border border-slate-200">
          <thead>
            <tr className="bg-blue text-white">
              {columns.map((col) => {
                return (
                  <td
                    key={col.id}
                    className="p-4 font-semibold tracking-wide"
                    style={{ minWidth: col.minWidth, textAlign: col.align }}
                  >
                    {col.label}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr>
                  <td className="p-4 font-regular tracking-wide text-center">
                    {row.index}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.customerName}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.mobileNo}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.dueAmount}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.lastPurchaseDate}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.lastPaymentDate}
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
                          boxShadow: "none",
                          width: "150px",
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
                      <MenuItem onClick={handleClose}>History</MenuItem>
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
export default CustomersTable;

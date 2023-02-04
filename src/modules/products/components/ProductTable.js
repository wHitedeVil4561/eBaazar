import React, { useState } from "react";
import Filter from "../../../shared/components/Filter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const ProductTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const columns = [
    {
      id: "index",
      label: "S.No.",
      minWidth: 70,
    },
    {
      id: "upc_code",
      label: "UPC Code",
      minWidth: 120,
    },
    {
      id: "productName",
      label: "Product Name",
      minWidth: 150,
    },
    {
      id: "catogery",
      label: "Category",
      minWidth: 100,
    },
    {
      id: "costPrice",
      label: "Cost Price",
      minWidth: 120,
    },
    {
      id: "wholesalePrice",
      label: "Wholesale Price",
      minWidth: 160,
    },
    {
      id: "retailsalePrice",
      label: "Retailsale Price",
      minWidth: 150,
    },
    {
      id: "discount",
      label: "Discount",
      minWidth: 100,
    },
    {
      id: "quantity",
      label: "Quantity",
      minWidth: 100,
    },
    {
      id: "stockType",
      label: "Stock Type",
      minWidth: 100,
    },
    {
      id: "bulkQnt",
      label: "Bulk Quantity",
      minWidth: 150,
    },
    {
      id: "action",
      label: "Action(s)",
      minWidth: 150,
      align: "center",
    },
  ];
  const rows = [
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      index: 1,
      upc_code: "Snow",
      productName: "Jon",
      catogery: 35,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
  ];
  const filterOptions = [
    { label: "Brand", placeholder: "Select Brand" },
    { label: "Category", placeholder: "Select Category" },
    { label: "Cost", placeholder: "Select Cost-range" },
    { label: "Quantity", placeholder: "Select quantity" },
  ];
  return (
    <div className="flex flex-col gap-5 w-full">
      <Filter filterOptions={filterOptions} />
      <div className=" rounded-t-xl overflow-auto min-w-full  max-w-[500]">
        <table className="table-auto w-full">
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
            {rows.map((row) => {
              return (
                <tr className=" border-b bg-white">
                  <td className="p-4 font-regular tracking-wide text-center">
                    {row.index}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.upc_code}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.productName}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.catogery}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.costPrice}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.wholesalePrice}
                  </td>
                  <td className="p-4 font-regular tracking-wide">
                    {row.retailsalePrice}
                  </td>
                  <td className="p-4 font-regular tracking-wide ">
                    {row.discount}
                  </td>
                  <td className="p-4 font-regular tracking-wide ">
                    {row.quantity}
                  </td>
                  <td className="p-4 font-regular tracking-wide ">
                    {row.stockType}
                  </td>
                  <td className="p-4 font-regular tracking-wide ">
                    {row.bulkQnt}
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

export default ProductTable;

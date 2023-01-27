import React from "react";
import { DataGrid } from '@mui/x-data-grid'
import "./ProductTable.scss";

import Filter from "../../../../shared/components/Filter/Filter";


const ProductTable = () => {
  
  const columns = [
    { field: "id", headerName: "S.No.", width: 70,headerClassName:'table-header' },
    { field: "upc_code", headerName: "UPC Code", width: 120,headerClassName:'table-header' },
    { field: "productName", headerName: "Product Name", width: 150,headerClassName:'table-header' },
    { field: "catogery", headerName: "Category", width: 100 ,headerClassName:'table-header'},
    { field: "costPrice", headerName: "Cost Price", width: 120,headerClassName:'table-header' },
    { field: "wholesalePrice", headerName: "Wholesale Price", width: 120 ,headerClassName:'table-header'},
    { field: "retailsalePrice", headerName: "Retailsale Price", width: 120,headerClassName:'table-header' },
    { field: "discount", headerName: "Discount", width: 100,headerClassName:'table-header' },
    { field: "quantity", headerName: "Quantity", width: 100 ,headerClassName:'table-header'},
    { field: "stockType", headerName: "Stock Type", width: 100,headerClassName:'table-header' },
    { field: "bulkQnt", headerName: "Bulk Quantity", width: 150,headerClassName:'table-header' },
  ];
  const rows = [
    {
      id: 1,
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
      id: 2,
      upc_code: "Lannister",
      productName: "Cersei",
      catogery: 42,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 3,
      upc_code: "Lannister",
      productName: "Jaime",
      catogery: 45,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 4,
      upc_code: "Stark",
      productName: "Arya",
      catogery: 16,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 5,
      upc_code: "Targaryen",
      productName: "Daenerys",
      catogery: null,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 6,
      upc_code: "Melisandre",
      productName: null,
      catogery: 150,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 7,
      upc_code: "Clifford",
      productName: "Ferrara",
      catogery: 44,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 8,
      upc_code: "Frances",
      productName: "Rossini",
      catogery: 36,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
      id: 9,
      upc_code: "Roxie",
      productName: "Harvey",
      catogery: 65,
      costPrice: 1,
      wholesalePrice: "Snow",
      retailsalePrice: "Jon",
      discount: 35,
      stockType: "Jon",
      bulkQnt: 35,
      quantity: 35,
    },
    {
        id: 10,
        upc_code: "Roxie",
        productName: "Harvey",
        catogery: 65,
        costPrice: 1,
        wholesalePrice: "Snow",
        retailsalePrice: "Jon",
        discount: 35,
        stockType: "Jon",
        bulkQnt: 35,
        quantity: 35,
      },
      {
        id: 11,
        upc_code: "Roxie",
        productName: "Harvey",
        catogery: 65,
        costPrice: 1,
        wholesalePrice: "Snow",
        retailsalePrice: "Jon",
        discount: 35,
        stockType: "Jon",
        bulkQnt: 35,
        quantity: 35,
      },
      {
        id: 12,
        upc_code: "Roxie",
        productName: "Harvey",
        catogery: 65,
        costPrice: 1,
        wholesalePrice: "Snow",
        retailsalePrice: "Jon",
        discount: 35,
        stockType: "Jon",
        bulkQnt: 35,
        quantity: 35,
      },
  ];
 
  return (
    <>
      <div className="product-table">
       
        <div className="filter">
          <Filter />
        </div>
        <div className="table-container" style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
          />
        </div>
      </div>
    </>
  );
};

export default ProductTable;

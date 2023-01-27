import { Outlet } from "react-router-dom";
import "./Product.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const ProductLayout = () => {
  const ADD_PRODUCT = "Add Product";
  const ADD_CATEGORY = "Add Category";
  const BULK_UPLOAD = "Bulk Upload";
  return (
    <div className="main-product">
      <div className="product-header">
        <div className="container">
          <button className="button add-product">
            <AddCircleOutlineIcon /> {ADD_PRODUCT}
          </button>
          <button className="button bulk-upload">
            <CloudUploadIcon /> {BULK_UPLOAD}
          </button>
        </div>
        <div className="container">
          <input className="search-input" placeholder="Search" />
          <button className="button add-category">
            <AddCircleOutlineIcon /> {ADD_CATEGORY}
          </button>

          <button className="button download">
            <CloudDownloadIcon />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductLayout;

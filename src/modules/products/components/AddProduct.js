import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = (values) => {};
const onsubmit = () => {
  console.log("submit is called");
};
const AddProduct = () => {
  const title = "Add Product";
  const cancle = "Cancle";
  const save = "Save";
  const upcCode = "UPC Code";
  const productName = "Product Name";
  const category = "Category";
  const unit = "Unit";
  const costPrice = "CostPrice";
  const wholesalePrice = "Wholesale Price";
  const retailsalePrice = "Retailsale Price";
  const discount = "Discount";
  const stockType = "Stocktype";
  const qntyperStock = "Quantity per Stock";
  const quantity = "Quantity";
  const formik = useFormik({
    initialValues: {
      upcCode: "",
      productName: "",
      category: "",
      unit: "",
      costPrice: "",
      wholesalePrice: "",
      retailsalePrice: "",
      discount: "",
      stockType: "",
      qntyperStock: "",
      quantity: "",
    },
    validationSchema:Yup.object({
        upcCode:Yup.string("Must be a string").required('*Required'),
        productName:Yup.string("Must be a string").required('*Required').min(6,'At least 6 characters long or greater'),
        category:Yup.string("Must be a string").required('*Required'),
        unit:Yup.string("Must be a string").required('*Required'),
        costPrice:Yup.number().required('*Required'),
        wholesalePrice:Yup.number("Must be a number").required('*Required'),
        retailsalePrice:Yup.number().required('*Required'),
        discount:Yup.number(),
        stockType:Yup.string("Must be a string").required('*Required'),
        qntyperStock:Yup.string("Must be a string").required('*Required'),
        quantity:Yup.string("Must be a string").required('*Required')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="add-product-screen">
      <div className="add-product-title">
        <ArrowCircleLeftIcon />
        {title}
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="form-item">
              <label htmlFor="upcCode">{upcCode}</label>
              <input
                id="upcCode"
                name="upcCode"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.upcCode}
                placeholder={"Enter " + upcCode}
              />
              {formik.touched.upcCode && (formik.errors.upcCode ? (<div className="error-hint">{formik.errors.upcCode}</div>):null)}
            </div>
            <div className="form-item">
              <label htmlFor="productName">{productName}</label>
              <input
                id="productName"
                name="productName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.productName}
                placeholder={"Enter " + productName}
              />
              {formik.touched.productName && (formik.errors.productName ? (<div className="error-hint">{formik.errors.productName}</div>):null)}
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label htmlFor="category">{category}</label>
              <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.category}
                placeholder={"Enter " + category}
              />
              {formik.touched.category && (formik.errors.category ? (<div className="error-hint">{formik.errors.category}</div>):null)}
            </div>
            <div className="form-item">
              <label htmlFor="unit">{unit}</label>
              <input
                id="unit"
                name="unit"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.unit}
                placeholder={"Enter " + unit}
              />
              {formik.touched.unit && (formik.errors.unit ? (<div className="error-hint">{formik.errors.unit}</div>):null)}
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label htmlFor="costPrice">{costPrice}</label>
              <input
                id="costPrice"
                name="costPrice"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.costPrice}
                placeholder={"Enter " + costPrice}
              />
              {formik.touched.costPrice && (formik.errors.costPrice ? (<div className="error-hint">{formik.errors.costPrice}</div>):null)}
            </div>
            <div className="form-item">
              <label htmlFor="wholesalePrice">{wholesalePrice}</label>
              <input
                id="wholesalePrice"
                name="wholesalePrice"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.wholesalePrice}
                placeholder={"Enter " + wholesalePrice}
              />
              {formik.touched.wholesalePrice && (formik.errors.wholesalePrice ? (<div className="error-hint">{formik.errors.wholesalePrice}</div>):null)}
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label htmlFor="retailsalePrice">{retailsalePrice}</label>
              <input
                id="retailsalePrice"
                name="retailsalePrice"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.retailsalePrice}
                placeholder={"Enter " + retailsalePrice}
              />
              {formik.touched.retailsalePrice && (formik.errors.retailsalePrice ? (<div className="error-hint">{formik.errors.retailsalePrice}</div>):null)}
            </div>
            <div className="form-item">
              <label htmlFor="discount">{discount}</label>
              <input
                id="discount"
                name="discount"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.discount}
                placeholder={"Enter " + discount}
              />
              {formik.touched.discount && (formik.errors.discount ? (<div className="error-hint">{formik.errors.discount}</div>):null)}
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label htmlFor="stockType">{stockType}</label>
              <input
                id="stockType"
                name="stockType"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.stockType}
                placeholder={"Enter " + stockType}
              />
              {formik.touched.stockType && (formik.errors.stockType ? (<div className="error-hint">{formik.errors.stockType}</div>):null)}

            </div>
            <div className="form-item">
              <label htmlFor="qntyperStock">{qntyperStock}</label>
              <input
                id="qntyperStock"
                name="qntyperStock"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.qntyperStock}
                placeholder={"Enter " + qntyperStock}
              />
              {formik.touched.qntyperStock && (formik.errors.qntyperStock ? (<div className="error-hint">{formik.errors.qntyperStock}</div>):null)}

            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label htmlFor="quantity">{quantity}</label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.quantity}
                placeholder={"Enter " + quantity}
              />
              {formik.touched.quantity && (formik.errors.quantity ? (<div className="error-hint">{formik.errors.quantity}</div>):null)}
            </div>
            <div className="form-item"></div>
          </div>
          <div className="row btn">
            <button className="button">{cancle}</button>
            <button className="button" type="submit" onClick={onsubmit}>
              {save}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const AddStock = () => {
  const ADD_STOCK = "Add Stock";
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 items-center">
        <ArrowCircleLeftIcon className="cursor-pointer" />
        <span className="text-xl font-semibold text-dark-blue">
          {ADD_STOCK}
        </span>
      </div>
      <Formik
        initialValues={{
          dealerName: "",
          invoiceNumber: "",
          grandTotal: "",
          purchaseDate: "",
          invoiceImage: "",
        }}
        validationSchema={Yup.object({
          dealerName: Yup.string().required("*Required"),
          invoiceNumber: Yup.string().required("*Required"),
          grandTotal: Yup.string().required("*Required"),
          purchaseDate: Yup.string().required("*Required"),
          invoiceImage: Yup.string().required("*Required"),
        })}
        onSubmit={(values) => {
          console.log(values, "=================>");
        }}
      >
        <Form className="flex flex-col gap-6">
          <div className="flex justify-between gap-12">
            <div className="flex flex-col w-1/2">
              <label htmlFor="dealerName">Dealer Name</label>
              <Field name="dealerName" as="select">
                <option value="sumit">Sumit Gupta</option>
                <option value="alok">Alok Pandey</option>
                <option value="jai">Jai Narayan</option>
              </Field>
              <ErrorMessage name="invoiceNumber"></ErrorMessage>
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <Field
                name="invoiceNumber"
                type="text"
                className="border border-"
              />
              <ErrorMessage name="invoiceNumber"></ErrorMessage>
            </div>
          </div>
          <div className="flex justify-between gap-12">
            <div className="flex flex-col w-1/2">
              <label htmlFor="grandTotal">Grand Total</label>
              <Field name="grandTotal" type="text" />

              <ErrorMessage name="grandTotal"></ErrorMessage>
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="purchaseDate">Purchase Date</label>
              <Field name="purchaseDate" type="date" />

              <ErrorMessage name="purchaseDate"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="invoiceImage">Invoice Image</label>
            <Field name="invoiceImage" type="file" />

            <ErrorMessage name="invoiceImage"></ErrorMessage>
          </div>
          <div className="flex justify-center gap-8">
            <button className="bg-white border border-dark-blue px-5 py-2 rounded-xl w-28 text-dark-blue hover:text-white hover:bg-blue-hues font-bold tracking-wider">
              Cancle
            </button>
            <button
              type="submit"
              className="bg-white border border-dark-blue px-5 py-2 rounded-xl w-28 text-dark-blue hover:text-white hover:bg-blue-hues font-bold tracking-wider"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddStock;

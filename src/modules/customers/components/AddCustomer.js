import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const AddCustomer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex gap-5 items-center">
        <Link to={"../list"}>
          <ExpandCircleDownIcon className="rotate-90" />
        </Link>
        <span className="font-medium text-2xl text-dark-blue">
          {t("ADD_CUSTOMER")}
        </span>
      </div>
      <div className="w-full bg-white rounded-xl p-5">
        <Formik
          initialValues={{
            customerName: "",
            mobileNo: "",
            email: "",
            address: "",
          }}
          validationSchema={Yup.object({
            customerName: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            mobileNo: Yup.string()
              .matches(/^[6-9]\d{9}$/, {
                message: "Please enter valid number.",
                excludeEmptyString: false,
              })
              .required("Required"),
            email: Yup.string().email("Invalid email address"),
            address: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="flex flex-col gap-5">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="customerName" className="text-xl">
                  {t("CUSTOMER_NAME")}
                </label>
                <Field
                  name="customerName"
                  type="text"
                  className="border border-input-border rounded-lg px-5 text-base"
                  placeholder={t("CUSTOMER_NAME")}
                />
                <ErrorMessage name="customerName">
                  {(msg) => <div className="error-hint">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="mobileNo" className="text-xl">
                  {t("MOBILE_NO")}
                </label>
                <Field
                  name="mobileNo"
                  type="text"
                  className="border border-input-border rounded-lg px-5 text-base"
                  placeholder={t("MOBILE_NO")}
                />
                <ErrorMessage name="mobileNo">
                  {(msg) => <div className="error-hint">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="email" className="text-xl">
                  {t("EMAIL_ADDRESS")}
                </label>
                <Field
                  name="email"
                  type="email"
                  className="border border-input-border rounded-lg px-5 text-base"
                  placeholder={t("EMAIL_ADDRESS")}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="error-hint">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="address" className="text-xl">
                  {t("ADDRESS")}
                </label>
                <Field
                  name="address"
                  type="text"
                  className="border border-input-border rounded-lg px-5 text-base"
                  placeholder={t("ADDRESS")}
                />
                <ErrorMessage name="address">
                  {(msg) => <div className="error-hint">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-blue py-3 w-[200] text-white rounded-lg text-xl mt-5"
              >
                {t("SUBMIT")}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default AddCustomer;

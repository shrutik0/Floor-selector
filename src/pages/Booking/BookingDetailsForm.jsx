import React from "react";
import { FormStyle } from "./form.style";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField } from "../../components/atoms/FormField";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  address: "",
  pincode: "",
  pan: "",
  aadhaar: "",
};

const ProductUploadSchema = Yup.object().shape({
  name: Yup.string()
    .required("Product Name is required")
    .min(3, "Product Name is too short"),
});

const SubmitButton = ({ dirty, isValid }) => (
  <div className="submit-wrapper">
    <button
      type="submit"
      className={!(dirty && isValid) ? "disabled-btn submit-btn" : "submit-btn"}
      disabled={!(dirty && isValid)}
    >
      Continue to booking
    </button>
    <img alt="right" src={`${process.env.PUBLIC_URL}/icons/right.svg`} />
  </div>
);

export const BookingDetailsForm = () => {
  return (
    <FormStyle>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductUploadSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <div className="title">enter your details</div>
              <Form className="form">
                <div className="inline-fields">
                  <FormField
                    className={
                      errors.first_name && touched.first_name
                        ? "input-error"
                        : null
                    }
                    key="first_name"
                    name="first_name"
                    title="First Name*"
                    placeholder="Enter first name"
                    type="text"
                  />
                  <FormField
                    className={
                      errors.last_name && touched.last_name
                        ? "input-error"
                        : null
                    }
                    key="last_name"
                    name="last_name"
                    title="Last Name*"
                    type="text"
                    placeholder="Last Name*"
                  />
                </div>

                <div className="inline-fields">
                  <FormField
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                    key="email"
                    name="email"
                    title="Email Address*"
                    type="email"
                    placeholder="Enter email address"
                  />
                  <FormField
                    className={
                      errors.phone && touched.phone ? "input-error" : null
                    }
                    key="phone"
                    name="phone"
                    title="Phone No.*"
                    type="text"
                    placeholder="Enter Phone No."
                  />
                </div>

                <div className="inline-fields">
                  <FormField
                    className={
                      errors.country && touched.country ? "input-error" : null
                    }
                    key="country"
                    name="country"
                    title="Country*"
                    type="text"
                    placeholder="Select your country"
                  />
                  <FormField
                    className={
                      errors.city && touched.city ? "input-error" : null
                    }
                    key="city"
                    name="city"
                    title="City*"
                    type="text"
                    placeholder="Select your city"
                  />
                </div>

                <div className="inline-fields">
                  <FormField
                    className={
                      errors.address && touched.address ? "input-error" : null
                    }
                    key="address"
                    name="address"
                    title="Address*"
                    type="text"
                    placeholder="Enter your address"
                  />
                  <FormField
                    className={
                      errors.pincode && touched.pincode ? "input-error" : null
                    }
                    key="pincode"
                    name="pincode"
                    title="Pincode*"
                    type="text"
                    placeholder="Enter your pincode"
                  />
                </div>

                <div className="inline-fields">
                  <FormField
                    className={errors.pan && touched.pan ? "input-error" : null}
                    key="pan"
                    name="pan"
                    title="PAN Card*"
                    type="text"
                    placeholder="Enter your PAN no."
                  />
                  <FormField
                    className={
                      errors.aadhaar && touched.aadhaar ? "input-error" : null
                    }
                    key="aadhaar"
                    name="aadhaar"
                    title="Aadhaar Card"
                    type="text"
                    placeholder="Enter your Aadhaar no."
                  />
                </div>
                <div className="desc ft-lt">
                  Our checkout is safe and secure. Your personal information is
                  securely transmitted via 128-bit encryption. We do not save
                  any payment card information on our systems.
                </div>
                <div className="tnc">
                  <input type="checkbox" />
                  <span>I Agree to the Terms & Conditions of sale</span>
                </div>
                <SubmitButton dirty={dirty} isValid={isValid} />
              </Form>
            </div>
          );
        }}
      </Formik>
    </FormStyle>
  );
};

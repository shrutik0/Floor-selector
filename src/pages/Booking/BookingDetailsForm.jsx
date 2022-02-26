import React from "react";
import { FormStyle } from "./form.style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormField } from "../../components/atoms/FormField";
import { PhoneField } from "../../components/atoms/PhoneField";
import CountryCityFields from "./CountryCityFields";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  country: "",
  country_code: "+91",
  city: "",
  address: "",
  pincode: "",
  pan: "",
  aadhar: "",
  terms_and_condition: false,
};

const BookingFormSchema = Yup.object().shape({
  first_name: Yup.string().required("Please enter your first name"),
  last_name: Yup.string().required("Please enter your last name"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter your email"),
  phone: Yup.string()
    .required("Please enter your phone no.")
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid phone no.",
      excludeEmptyString: false,
    }),

  address: Yup.string()
    .required("Please enter your address")
    .min(5, "Address is too short"),

  pincode: Yup.string().matches(/^[1-9]\d{5}$/, {
    message: "Please enter valid pincode",
    excludeEmptyString: false,
  }),

  pan: Yup.string()
    .required("Please enter your pan card no.")
    .matches(/[A-Z]{3}[ABCFGHLJPTK]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}/, {
      message: "Please enter valid pan card no.",
      excludeEmptyString: false,
    })
    .max(12, "Please enter valid pan card no."),

  aadhar: Yup.string().matches(/^\d{4}\d{4}\d{4}$/, {
    message: "Please enter valid aadhar card no.",
    excludeEmptyString: false,
  }),

  terms_and_condition: Yup.boolean().oneOf(
    [true],
    "You must accept the pricing policy terms and conditions"
  ),
});

const SubmitButton = ({ dirty, isValid, coutryCityError }) => (
  <button
    type="submit"
    className={
      !(dirty && isValid) || coutryCityError
        ? "disabled-btn submit-wrapper"
        : "submit-wrapper"
    }
    disabled={!(dirty && isValid) || coutryCityError}
  >
    <span>Continue to payment</span>
    <img alt="right" src={`${process.env.PUBLIC_URL}/icons/right.svg`} />
  </button>
);

export const BookingDetailsForm = ({ onSubmit }) => {
  return (
    <FormStyle>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingFormSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty, setValues, values } = formik;
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
                  <PhoneField
                    className={
                      errors.phone && touched.phone
                        ? "input-error phone"
                        : "phone"
                    }
                    key="phone"
                    name="phone"
                    title="Phone No.*"
                    type="text"
                    placeholder="Enter Phone No."
                    setFormValues={setValues}
                  ></PhoneField>
                </div>
                <CountryCityFields
                  errors={errors}
                  touched={touched}
                  setFormValues={setValues}
                />
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
                    style={{ textTransform: "uppercase" }}
                  />
                  <FormField
                    className={
                      errors.aadhar && touched.aadhar ? "input-error" : null
                    }
                    key="aadhar"
                    name="aadhar"
                    title="Aadhar Card"
                    type="text"
                    placeholder="Enter your Aadhar no."
                  />
                </div>
                <div className="desc ft-lt">
                  Our checkout is safe and secure. Your personal information is
                  securely transmitted via 128-bit encryption. We do not save
                  any payment card information on our systems.
                </div>
                <div className="tnc">
                  <Field
                    type="checkbox"
                    name="terms_and_condition"
                    className="checkbox disable-team team_values"
                  />
                  <span>I Agree to the Terms & Conditions of sale</span>
                </div>
                <div className="advance-amount">
                  You will be charged now only for booking fee of 20,000 ₹
                </div>
                <SubmitButton
                  dirty={dirty}
                  isValid={isValid}
                  coutryCityError={
                    values.country.length === 0 || values.city.length === 0
                  }
                />
              </Form>
            </div>
          );
        }}
      </Formik>
    </FormStyle>
  );
};

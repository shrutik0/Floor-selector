import React, { useState } from "react";
import { FormStyle } from "./form.style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormField } from "../../components/atoms/FormField";
import { PhoneField } from "../../components/atoms/PhoneField";
import CountryCityFields from "./CountryCityFields";
import Dialog from "./Dialog";

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
    // .matches(/[a-z]{3}[abcfghljptk]{1}[a-z]{1}[0-9]{4}[a-z]{1}/, {
    //   message: "Please enter valid pan card no.",
    //   excludeEmptyString: false,
    // })
    .max(12, "Please enter valid pan card no."),

  aadhar: Yup.string()
    .required("Please enter your Aadhar card no.")
    .matches(/^\d{4}\d{4}\d{4}$/, {
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
    <span>PAY NOW</span>
    <img alt="right" src={`${process.env.PUBLIC_URL}/icons/right.svg`} />
  </button>
);

export const BookingDetailsForm = ({ onSubmit }) => {
  const [showTnc, setShowTnc] = useState(false);
  return (
    <FormStyle>
      <Dialog
        body={<TnC />}
        header={"Terms & Conditions of sale"}
        showDialog={showTnc}
        setShowDialog={setShowTnc}
        className={"tnc-dialog"}
      />
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
                    title="Aadhar Card*"
                    type="text"
                    placeholder="Enter your Aadhar no."
                  />
                </div>
                <div className="advance-amount">
                  You will be charged now only for booking fee of{" "}
                  <b style={{ fontWeight: 500 }}> ₹ 20,000</b>
                </div>
                <div className="tnc">
                  <Field
                    type="checkbox"
                    name="terms_and_condition"
                    className="checkbox disable-team team_values"
                  />
                  <span>
                    I Agree to the
                    <div className="tnc-btn" onClick={() => setShowTnc(true)}>
                      Terms & Conditions
                    </div>
                    of sale
                  </span>
                </div>

                <div className="desc ft-lt">
                  Our checkout is safe and secure. Your personal information is
                  securely transmitted via 128-bit encryption. We do not save
                  any payment card information on our systems.
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

const TnC = () => (
  <p className="tnc-para">
    <ol>
      <li>
        Till such time the booking is confirmed, above prices/payment plans/unit
        availability are subject to revision/withdrawal at any time without
        notice at the sole discretion of the Developer.
      </li>
      <li>
        Following additional charges are not included in the above cost sheet
        and shall be charged extra:
        <ol className="sub-para ">
          <li>
            Cauvery water/other source of water provided by BWSSB or,any other
            authorities, when available, on a proportionate/actual basis.
          </li>
          <li>
            Any other charges/deposits/connection charges/fees etc for
            utility/services like electricity/gas/ water and sanitation / sewage
            etc on actual/proportionate basis.
          </li>
          <li>
            Khata transfer, execution of ATS, execution of sale deed etc on
            actuals including incidental expenses if any.
          </li>
          <li>
            All govt.taxes/levies/charges/surcharges including but not limited
            to stamp duty, registration charges etc.
          </li>
        </ol>
      </li>

      <li>
        Cheque to be drawn in favour of "ARVIND HEBBAL HOMES PVT LTD BELAIR
        PROJECT MASTER COLLECTION A/C".
      </li>

      <li>
        GST levied herein is based on applicable laws and best practices
        existing as of date. Any additional tax to be paid on account of deficit
        in GST rate differences as may be claimed by the Govt. Authorities in
        future will be borne by the Buyer(s).
      </li>

      <li>
        Carpet areas/dimensions are calculated based on architecture masonry
        dimensions only and includes plaster and tiles thickness etc.
      </li>

      <li>
        Electrical cable/ hookup/ transformer charges/ proportionate charges/
        deposits pertaining to electricity board to be paid to the relevant
        Government authorities based on actuals and on proportionate basis.
      </li>
      <li>
        Khata bifurcation/transfer charges are payable at actuals as
        communicated by the promoter / developer. Khata bifurcation/transfer
        charges are over and above the cost sheet mentioned above.
      </li>
      <li>
        This cost sheet is a system generated cost sheet and shall be accepted
        subject to final confirmation after the application is accepted.
      </li>
      <li>
        The Buyer(s)/Allottee(s) acknowledge that in case of cancellation of the
        Unit, and if the same is approved by the Developer, then the Developer
        is entitled to forfeit/ recover minimum of 10% of the agreed total
        consideration amount or such other amount as per the applicable
        policies/law as well as any interest on delayed payments as may be
        applicable to the payments received from the Buyer(s)/Allottee(s). In
        addition to the said forfeiture, the Developer shall be entitled to
        forfeit the following amounts from and out of any payments made by the
        Buyer(s)/Allottee(s) or recover the same from the Buyer(s)/Allottee(s)
        in the event the payments made by the Buyer(s)/Allottee(s) are
        insufficient to cover such amounts:
        <ol className="roman">
          <li>
            any applicable taxes, duties, cesses and statutory levies of
            whatsoever nature including but not limited to the Goods and Service
            Tax (GST), sales tax, revenue tax or any other applicable taxes,
            water charges, electricity charges and duties, in respect of the
            said Unit applicable and payable by the Buyer(s)/Allottee(s) prior
            to such cancellation; and
          </li>
          <li>
            any brokerage charges / referral payouts if the said Unit is
            purchased through a broker / channel partner of the Developer or
            through any referral scheme of the Developer.
          </li>
          After cancellation, Developer is entitled to re-allot and resell the
          Unit to any other person and on such terms and conditions as Developer
          deems fit and repay to the Buyer(s) the balance amount, if any, within
          60 (sixty) days from the date of cancellation.
        </ol>
      </li>
      <li>
        Upon payment of the blocking amount, the selected unit will be blocked
        for the Buyer for a period of 15 days within which time the Buyer will
        need to pay the entire booking amount equalling to 10% of the total
        consideration of the Unit. Failure of the Buyer to pay the booking
        amount within 15 days from the date of paying the blocking amount will
        result in unblocking of the Unit and the Developer will be free to
        allot/block/sell the said Unit to any other customer at its discretion
        without recourse to the Buyer. In the event of non-payment of the
        booking amount and the unblocking of the Unit, the Developer shall be
        entitled to forfeit the blocking amount of Rs. 20,000/- paid by the
        Buyer.
      </li>
    </ol>
    <br />
    <span className="title">TDS related details:</span>
    <br />
    <ol>
      <li>Tax Applicable: (0021) INCOME-TAX (OTHER THAN COMPANIES)</li>
      <li>
        Address of transferor: ARVIND HEBBAL HOMES PRIVATE LIMITED 24,
        Government Servant Society, Near Municipal Market, CG Road, 1st
        Applicant Ahmedabad - 380009 Gujarat E-mail: mehul.shah@arvind.in Phone:
        079 6826 7000
      </li>
      <li>
        Address of property: “Unit No.”, Arvind BelAir, Doddabettahalli Village,
        Yelahanka Hobli, Bangalore North Taluka, Karnataka 560064 Email:
        belair.care@arvind.in
      </li>
      <li>PAN card of transferor: AAQCS1295J</li>
      <li>
        Date of Agreement/Booking *: Please mention Booking date / Agreement
        registration date
      </li>
      <li>
        Total Value of Consideration (Property Value)*: Please refer your
        agreement or Unit consideration Value of cost sheet shared with you at
        the time of booking
      </li>
    </ol>
  </p>
);

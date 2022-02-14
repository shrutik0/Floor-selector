import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { PhoneFieldStyle } from "./atoms.style";
import { SelectInput } from "./Select";

export const PhoneField = ({
  name,
  title,
  className,
  type,
  placeholder,
  setFormValues,
}) => {
  const [countryCodes, setCountryCodes] = useState([]);
  useEffect(() => {
    let codes = [];
    for (let i = 1; i < 999; i++)
      codes.push({
        label: "+" + i,
        value: i,
      });
    setCountryCodes(codes);
  }, []);

  return (
    <PhoneFieldStyle className="form-row ft-lt">
      <label htmlFor={name}>{title}</label>
      <div className="input-wrapper">
        {/* <Field
          type={"text"}
          name={"country_code"}
          id={"country_code"}
          className="country-code"
          placeholder={placeholder}
          // value="+91"
        /> */}
        <SelectInput
          id="country-code"
          options={countryCodes}
          title={false}
          style={{ margin: "0", width: "35%" }}
          onChange={(e) => {
            setFormValues((values) => ({ ...values, country_code: e.label }));
          }}
          defaultValue={{ label: "+91", value: 1 }}
        />
        <Field
          type={type}
          name={name}
          id={name}
          className={className + " phone-input"}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={name} component="span" className="error" />
    </PhoneFieldStyle>
  );
};

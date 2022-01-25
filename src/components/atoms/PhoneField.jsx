import { ErrorMessage, Field } from "formik";
import { PhoneFieldStyle } from "./atoms.style";

export const PhoneField = ({ name, title, className, type, placeholder }) => (
  <PhoneFieldStyle className="form-row ft-lt">
    <label htmlFor={name}>{title}</label>
    <div className="input-wrapper">
      <Field
        type={"text"}
        name={"country-code"}
        id={"country-code"}
        className="country-code"
        placeholder={placeholder}
        value="+91"
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

import { ErrorMessage, Field } from "formik";

export const FormField = ({
  name = "name",
  title = "Product Name",
  className,
  type = "text",
  placeholder,
  style,
}) => (
  <div className="form-row ft-lt">
    <label htmlFor={name}>{title}</label>
    <Field
      type={type}
      name={name}
      id={name}
      className={className}
      placeholder={placeholder}
      style={style}
    />
    <ErrorMessage name={name} component="span" className="error" />
  </div>
);

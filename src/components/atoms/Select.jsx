import { ErrorMessage } from "formik";
import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

const SelectStyle = styled.div`
  .css-1s2u09g-control,
  .css-1pahdxg-control {
    background-color: #f6f6f6;
    padding: 0.2rem 0;
  }
  label {
    font-weight: 500 !important;
  }
`;

export const SelectInput = ({
  placeholder,
  title = "Country*",
  name = "country",
  options,
  onChange,
}) => (
  <SelectStyle className="form-row">
    <label htmlFor={name}>{title}</label>
    <Select
      options={options}
      placeholder={placeholder}
      styles={{ width: "100%" }}
      hideSelectedOptions
      onChange={onChange}
    />
    <ErrorMessage name={name} component="span" className="error" />
  </SelectStyle>
);

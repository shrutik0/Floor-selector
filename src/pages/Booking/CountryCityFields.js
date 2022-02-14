import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/atoms/Select";
import COUNTRY_CITY from "../../data/countries.json";

function CountryCityFields({ errors, touched, setFormValues }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const loadContries = () => {
    setCountries(
      Object.keys(COUNTRY_CITY).map((country_name, index) => ({
        label: country_name,
        value: index,
      }))
    );
  };

  useEffect(() => {
    loadContries();
    setFormValues((values) => ({ ...values, country: "India" }));
  }, []);

  useEffect(() => {
    if (selectedCountry)
      setCities(
        COUNTRY_CITY[selectedCountry].map((city, index) => ({
          label: city,
          value: index,
        }))
      );
  }, [selectedCountry]);

  return (
    <div className="inline-fields">
      {countries.length > 1 && (
        <SelectInput
          placeholder="Select your country"
          title="Country*"
          options={countries}
          onChange={(e) => {
            // setFormErrors(errors=>())
            setSelectedCountry(e.label);
            setFormValues((values) => ({ ...values, country: e.label }));
          }}
          defaultValue={countries.find((country) => country.label == "India")}
        />
      )}
      <SelectInput
        placeholder="Select your city"
        title="City*"
        name="city"
        className={errors.city && touched.city ? "input-error" : null}
        options={cities}
        onChange={(e) =>
          setFormValues((values) => ({ ...values, city: e.label }))
        }
      />
    </div>
  );
}

export default CountryCityFields;

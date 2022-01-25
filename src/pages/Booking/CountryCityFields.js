import React, { useEffect, useState } from "react";
import { SelectInput } from "../../components/atoms/Select";
import COUNTRY_CITY from "../../data/countries.json";

function CountryCityFields({ errors, touched }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(false);

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

  useEffect(() => {
    if (cities.length > 1) console.log(cities);
  }, [cities]);

  return (
    <div className="inline-fields">
      {countries.length > 1 && (
        <SelectInput
          placeholder="Select your country"
          title="Country*"
          className={errors.country && touched.country ? "input-error" : null}
          options={countries}
          onChange={(e) => setSelectedCountry(e.label)}
        />
      )}
      <SelectInput
        placeholder="Select your city"
        title="City*"
        name="city"
        className={errors.city && touched.city ? "input-error" : null}
        options={cities}
      />
    </div>
  );
}

export default CountryCityFields;

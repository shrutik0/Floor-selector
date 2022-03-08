import React from "react";
import { PropertyDetailsSectionStyle } from "./booking.style";
import DetailsSection from "./DetailsSection";
import ImageSection from "./ImageSection";

function PropertyDetailsSection({ propertyId = false }) {
  return (
    <PropertyDetailsSectionStyle id="property-details-section">
      <ImageSection />
      <DetailsSection propertyId={propertyId} />
    </PropertyDetailsSectionStyle>
  );
}

export default PropertyDetailsSection;

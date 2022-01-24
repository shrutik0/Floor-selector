import React from "react";
import { DetailsSectionStyle } from "./booking.style";

const ImageText = ({ src, text }) => (
  <div className="img-text">
    <img src={`${process.env.PUBLIC_URL}/icons/${src}.svg`} />
    <span>{text}</span>
  </div>
);

function DetailsSection(props) {
  return (
    <DetailsSectionStyle>
      <table className="ft-lt">
        <tr>
          <td>
            <ImageText text="Bed" src="bed" />
          </td>
          <td className="value">1</td>
        </tr>
        <tr>
          <td>
            <ImageText text="Floor" src="floor" />
          </td>
          <td className="value">1</td>
        </tr>
        <tr>
          <td>
            <ImageText text="Area" src="area" />
          </td>
          <td className="value">650 SQ.FT / 60.36 SQ.M</td>
        </tr>
        <tr>
          <td>
            <ImageText text="Price" src="rupee" />
          </td>
          <td className="value">500000</td>
        </tr>
        <tr>
          <td>
            <ImageText text="Floor Plan" src="floor-plan" />
          </td>
          <td className="value link">
            <span>View</span>
          </td>
        </tr>
        <tr>
          <td>
            <ImageText text="Payment Plan" src="cashless-payment" />
          </td>
          <td className="value link">
            <span>View</span>
          </td>
        </tr>
      </table>
    </DetailsSectionStyle>
  );
}

export default DetailsSection;

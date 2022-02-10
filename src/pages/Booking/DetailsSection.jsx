import React from "react";
import { useState } from "react";
import { DetailsSectionStyle } from "./booking.style";
import Dialog from "./Dialog";

const ImageText = ({ src, text }) => (
  <div className="img-text">
    <img src={`${process.env.PUBLIC_URL}/icons/${src}.svg`} />
    <span>{text}</span>
  </div>
);

function DetailsSection() {
  const [showPaymentplan, setShowPaymentplan] = useState(false);
  const [showFloorplan, setShowFloorplan] = useState(false);
  return (
    <>
      <Dialog
        showDialog={showPaymentplan}
        setShowDialog={setShowPaymentplan}
        header="Payment Plan"
        body={<Paymentplan />}
      />
      <Dialog
        showDialog={showFloorplan}
        setShowDialog={setShowFloorplan}
        header="Floor Plan"
        body={
          <img
            src={`${process.env.PUBLIC_URL}/images/flats/A/4.png`}
            className="floorplan-img"
          />
        }
      />
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
              <span onClick={() => setShowFloorplan(true)}>View</span>
            </td>
          </tr>
          <tr>
            <td>
              <ImageText text="Payment Plan" src="cashless-payment" />
            </td>
            <td className="value link">
              <span onClick={() => setShowPaymentplan(true)}>View</span>
            </td>
          </tr>
        </table>
      </DetailsSectionStyle>
    </>
  );
}

export default DetailsSection;

const Paymentplan = () => (
  <table>
    <tbody>
      <tr className="header">
        <td>Milestones</td>
        <td>%</td>
        <td>Amount</td>
      </tr>
      <tr>
        <td>1st Installment</td>
        <td>20</td>
        <td>216,578</td>
      </tr>
      <tr className="border">
        <td>1st Installment</td>
        <td>20</td>
        <td>216,578</td>
      </tr>
    </tbody>
  </table>
);

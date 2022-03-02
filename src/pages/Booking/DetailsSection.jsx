import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { rupeeIndian } from "../../functions/helpers";
import {
  getAllFlatsInFloor,
  getFlatFromPropertyId,
} from "../../functions/inventory";
import { DetailsSectionStyle } from "./booking.style";
import Dialog from "./Dialog";

const ImageText = ({ src, text }) => (
  <div className="img-text">
    <img src={`${process.env.PUBLIC_URL}/icons/${src}.svg`} />
    <span>{text}</span>
  </div>
);

function DetailsSection({ propertyId = false }) {
  const id_from_url = "PR" + useLocation().hash.replace("%20", " ");
  const property_id = propertyId || id_from_url;
  const flat = getFlatFromPropertyId(property_id);
  const [showPaymentplan, setShowPaymentplan] = useState(false);
  const [showFloorplan, setShowFloorplan] = useState(false);
  const first_installment_amount = flat.TotalCost * (20 / 100);
  const on_handover_amount = flat.TotalCost - first_installment_amount;
  return (
    <>
      <Dialog
        showDialog={showPaymentplan}
        setShowDialog={setShowPaymentplan}
        header="Payment Plan"
        body={
          <Paymentplan
            first_installment_amount={first_installment_amount}
            on_handover_amount={on_handover_amount}
          />
        }
      />
      <Dialog
        showDialog={showFloorplan}
        setShowDialog={setShowFloorplan}
        header="Floor Plan"
        body={
          <img
            src={`${process.env.PUBLIC_URL}/images/flats/${flat["Tower"]}/${
              getAllFlatsInFloor(flat["Tower"], flat["Floor"]).indexOf(flat) + 1
            }.png`}
            className="floorplan-img"
          />
        }
      />
      <DetailsSectionStyle>
        <table className="ft-lt">
          <tr>
            <td>
              <ImageText text="Unit" src="floor" />
            </td>
            <td className="value">{flat.FlatNumber}</td>
          </tr>
          <tr>
            <td>
              <ImageText text="Type" src="floor" />
            </td>
            <td className="value">{flat.UnitType}</td>
          </tr>
          <tr>
            <td>
              <ImageText text="SBU Area" src="area" />
            </td>
            <td className="value">{parseInt(flat.Area)} Sq.ft</td>
          </tr>
          <tr>
            <td>
              <ImageText text="Carpet Area" src="area" />
            </td>
            <td className="value">{parseInt(flat.CarpetArea)} Sq.ft</td>
          </tr>
          <tr>
            <td>
              <ImageText text="Price" src="rupee" />
            </td>
            <td className="value">
              {` ₹ ` + rupeeIndian.format(parseInt(flat["TotalCost"]))}
            </td>
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

const Paymentplan = ({ first_installment_amount, on_handover_amount }) => (
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
        <td>₹ {rupeeIndian.format(parseInt(first_installment_amount))}</td>
      </tr>
      <tr className="border">
        <td>On Handover</td>
        <td>80</td>
        <td>₹ {rupeeIndian.format(parseInt(on_handover_amount))}</td>
      </tr>
      <tr className="border">
        <td>Total</td>
        <td>100</td>
        <td>
          ₹{" "}
          {rupeeIndian.format(
            parseInt(first_installment_amount + on_handover_amount)
          )}
        </td>
      </tr>
    </tbody>
  </table>
);

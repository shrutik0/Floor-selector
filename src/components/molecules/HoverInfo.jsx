import React from "react";
import { Link } from "react-router-dom";
import { HoverInfoStyle } from "./molecules.style";

const Title = ({ title }) => <div className="title">{title}</div>;

const Features = ({ features }) => (
  <div className="features">
    {features.map((feature) => (
      <div key={feature}>{feature}</div>
    ))}
  </div>
);

function HoverInfo({ title = "", features = [], onViewClick }) {
  return (
    <HoverInfoStyle className="info-body">
      <Title title={title} />
      <Features features={features} />
      {onViewClick && <ViewButton onClick={onViewClick} />}
    </HoverInfoStyle>
  );
}

export default HoverInfo;

const ViewButton = ({ onClick }) => (
  <div className="view-btn" onClick={onClick}>
    view
  </div>
);

import React from "react";
import { HoverInfoStyle } from "./molecules.style";

const Title = ({ title }) => <div className="title">{title}</div>;

const Features = ({ features }) => (
  <div className="features">
    {features.map((feature) => (
      <div>{feature}</div>
    ))}
  </div>
);

function HoverInfo({ title = "", features = [] }) {
  return (
    <HoverInfoStyle>
      <Title title={title} />
      <Features features={features} />
    </HoverInfoStyle>
  );
}

export default HoverInfo;

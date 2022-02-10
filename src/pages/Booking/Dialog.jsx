import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DialogStyle } from "./booking.style";

function Dialog({ header, body, showDialog, setShowDialog }) {
  const [came, setCame] = useState(false);
  const [out, setOut] = useState(!showDialog);

  useEffect(() => {
    if (showDialog) {
      setOut(false);
      setTimeout(() => {
        setCame(true);
      }, 40);
    } else {
      setCame(false);
      setTimeout(() => {
        setOut(true);
      }, 400);
    }
  }, [showDialog]);

  return !out ? (
    <DialogStyle
      style={{
        opacity: came ? "1" : "0",
      }}
      className="fade"
    >
      <div
        className="model ease-in"
        style={{
          transform: came ? "translateY(0)" : "translateY(-10vh)",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/close.svg`}
          alt="close"
          className="close"
          onClick={() => setShowDialog(false)}
        />
        <div className="header ft-mar">{header}</div>
        <div className="model-body ft-lt">{body}</div>
      </div>
    </DialogStyle>
  ) : (
    <></>
  );
}

export default Dialog;

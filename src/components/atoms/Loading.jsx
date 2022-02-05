import React from "react";
import { useLoading } from "../../contexts/AppContext";

function Loading(props) {
  const { loading } = useLoading();
  return loading ? (
    <div className="loading-wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Loading;

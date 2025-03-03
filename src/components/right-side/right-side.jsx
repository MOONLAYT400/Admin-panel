import React from "react";
import Updates from "../updates/updates";
import "./right-side.css";
import Review from "../customer-review/review";

const RightSide = () => {
  return (
    <div className="wrapper">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer review</h3>
        <Review />
      </div>
    </div>
  );
};

export default RightSide;

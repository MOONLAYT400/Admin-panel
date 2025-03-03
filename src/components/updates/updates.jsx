import React from "react";
import "./updates.css";
import { updatesData } from "../../data/data";

const Updates = () => {
  return (
    <div className="updates">
      {updatesData.map((update, i) => {
        return (
          <div className="update" key={i}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div className="noti-part">
                <span className="customer-name">{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;

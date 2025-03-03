import React from "react";
import "./MainDash.css";
import Cards from "../cards/cards";
import CustomTable from "../table/table";

const MainDash = () => {
  return (
    <div className="wrapper">
      <h1>Dashboard</h1>
      <Cards />
      <CustomTable />
    </div>
  );
};

export default MainDash;

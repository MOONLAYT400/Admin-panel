import React, { useState } from "react";
import "./card.css";

import { AnimateSharedLayout, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={data} setExpanded={setExpanded} />
      ) : (
        <CompactCard data={data} setExpanded={setExpanded} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;

const CompactCard = ({ data, setExpanded }) => {
  const {
    title,
    value,
    barValue,
    color: { backGround, boxShadow },
  } = data;

  return (
    <motion.div
      className="compact-card"
      style={{
        background: backGround,
        boxShadow: boxShadow,
      }}
      onClick={() => setExpanded(true)}
      layoutId="expandableCard"
    >
      <div className="radial-bar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="detail">
        <data.png />
        <span>{value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ param, setExpanded }) => {
  const {
    title,
    series,
    options,
    color: { backGround, boxShadow },
  } = param;

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expanded-card"
      style={{
        background: backGround,
        boxShadow: boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div onClick={() => setExpanded(false)} className="close-button">
        <UilTimes />
      </div>
      <span>{title}</span>
      <div className="chart-container">
        <Chart series={series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

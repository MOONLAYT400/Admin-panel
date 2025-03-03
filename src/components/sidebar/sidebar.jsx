import React, { useState } from "react";

import "./sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((el, i) => {
            return (
              <div
                className={selected === i ? "menuItem active" : "menuItem"}
                key={i}
                onClick={() => setSelected(i)}
              >
                <el.icon />
                <span>{el.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

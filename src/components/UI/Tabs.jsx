import React, { useState } from "react";
// import "./Tabs.css";

export const Tabs = ({ id, children }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div id={id} className="Tabs">
      <ul className="TabHeaders">
        {children.map((tab, index) => {
          return (
            <li
              id={`tabheader-${index}`}
              key={`tabheader-${index}`}
              className="TabHeader"
              data-selected={index === current}
              onClick={(e) => setCurrent(index)}
            >
              {tab.props.title}
            </li>
          );
        })}
      </ul>
      <div className="TabPanels">
        {children.map((tab, index) => {
          return (
            <div
              id={`tabpanel-${index}`}
              key={`tabpanel-${index}`}
              className="TabPanel"
              data-selected={index === current}
            >
              {tab.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

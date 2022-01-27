import React from "react";
import "./Drop.css";
import { Link } from "react-router-dom";

const Drop = (props) => {
  return (
    <div className="drop-container">
      {/* <Link to="/busy">1-2 days a week</Link> */}
      <div className="ui compact menu">
        <div className="ui simple dropdown item">
          Choose your poison
          <i className="dropdown icon"></i>
          <div className="menu">
            <div
              className="item"
              onClick={(e) => {
                props.handleBusy(e);
              }}
            >
              1-2 times a week
            </div>
            <div className="item">3 days a week</div>
            <div className="item">5-6 days a week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drop;

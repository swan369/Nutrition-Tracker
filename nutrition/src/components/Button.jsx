import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input
      className="btn btn-primary"
      type="submit"
      value="submit"
      onClick={(e) => {
        props.click(props.msg, e);
        props.handleClickReset();
      }}
    />
  );
};

export default Button;

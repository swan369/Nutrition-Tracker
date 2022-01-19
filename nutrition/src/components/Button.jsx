import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input
      type="submit"
      value="submit"
      onClick={() => {
        props.click(props.msg);
      }}
    />
  );
};

export default Button;

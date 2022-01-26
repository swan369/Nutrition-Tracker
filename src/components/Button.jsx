import React, { useContext } from "react";
import { DataContext } from "./Diet.jsx";
import "./Button.css";

const Button = (props) => {
  // const dataContext = useContext(DataContext);

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

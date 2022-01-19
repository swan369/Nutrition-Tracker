import React from "react";
import Button from "./Button";
import "./Form.css";
import { useRef } from "react";

const Form = (props) => {
  const inputRef = useRef();
  return (
    <div>
      <input className="textInput" type="text" ref={inputRef} />
      <Button className="btn" msg={inputRef} click={props.click} />
    </div>
  );
};

export default Form;

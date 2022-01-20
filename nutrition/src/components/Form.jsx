import React from "react";
import Button from "./Button";
import "./Form.css";
import { useRef } from "react";

const Form = (props) => {
  const inputRef = useRef();
  // console.log(inputRef);
  const reset = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input
        // value={props.request}
        className="text"
        type="text"
        ref={inputRef}
        // onChange={props.click}
      />
      <Button msg={inputRef} click={props.click} handleClickReset={reset} />
    </div>
  );
};

export default Form;

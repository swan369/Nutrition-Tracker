import React from "react";
import Button from "./Button";
import "./Form.css";
import { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "./Diet.jsx";

const Form = (props) => {
  const click = useContext(DataContext);
  const inputRef = useRef();
  // console.log(click);
  // console.log(inputRef);
  const reset = () => {
    inputRef.current.value = "";
  };

  return (
    // <div className="form">
    //   <input
    //     placeholder="your food here.."
    //     className="textInput"
    //     // value={props.request}
    //     type="text"
    //     ref={inputRef}
    //     // onChange={props.click}
    //   />
    //   <Button msg={inputRef} click={click} handleClickReset={reset} />
    // </div>
    <div className="form">
      {/* <div className="ui loading search"> */}
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          ref={inputRef}
          placeholder="Search..."
        />
        <i className="search icon"></i>
      </div>
      <Button msg={inputRef} click={click} handleClickReset={reset} />

      {/* <div className="results"></div> */}
      {/* </div> */}
    </div>
  );
};

export default Form;

// click={props.click}

import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [newRef, handleOnPaste] = IsCharHook();
  const [onChangeInput] = useInputNumberHook();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        name="input"
        onPaste={handleOnPaste}
        refs={newRef}
        onChange={onChangeInput}
      />
    </div>
  );
}

const useInputNumberHook = () => {
  const numRef = useRef();
  // useEffect(() => {
  //   setNum(specialValue);
  // }, [specialValue]);
  // console.log(hasChar);
  const onChangeInput = ({ target: { name, value } }) => {
    console.log("onchange", value);
    // @#$@#$@#$
    // daksdk23123!@!##!@#
    // sdffl234234
    // @#$@$$!@#@#!#1231313
    // if (!hasChar) {
    //   let str = "";
    //   let regex = /[^a-zA-Z0-9 ]/g;

    //   str = value.replace(regex, "");
    //   numRef.current = str;
    // }
  };

  return [onChangeInput];
};

const IsCharHook = () => {
  const numRef = useRef();
  const [hasChar, setHasChar] = useState(false);
  let letterNumber = /\w+/;
  const handleOnPaste = ({ clipboardData }) => {
    let newVal = clipboardData.getData("Text");
    console.log("onPaste", newVal);
    // if (newVal.match(letterNumber) instanceof Array) {
    //   setHasChar(false);
    //   numRef.current = value;
    // } else {
    //   setHasChar(true);
    //   numRef.current = newVal;
    // }
  };

  return [hasChar, handleOnPaste];
};

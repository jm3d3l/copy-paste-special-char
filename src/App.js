import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [str, onChangeInput] = useInputNumberHook();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={str} name="input" onChange={onChangeInput} />
    </div>
  );
}

const useInputNumberHook = (onChange = null, specialValue) => {
  const numRef = React.useRef("");
  const [str, setNum] = React.useState("");
  React.useEffect(() => {
    setNum(specialValue);
  }, [specialValue]);

  const onChangeInput = ({ target: { name, value } }) => {
    // @#$@#$@#$
    // daksdk23123!@!##!@#
    // sdffl234234
    // @#$@$$!@#@#!#1231313
    let str = "";
    let regex = /[^a-zA-Z0-9 ]/g;
    let letterNumber = /\w+/;
    if (value.match(letterNumber) instanceof Array) {
      console.log(
        "instance of ara",
        value.match(letterNumber) instanceof Array
      );
      str = value.replace(regex, "");
      setNum(str);
    } else {
      setNum(state => state);
    }
    let e = {
      target: {}
    };

    e.target.name = name;
    e.target.value = str;
    // onChange(e)
  };
  return [str, onChangeInput];
};

/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleClickEmail() {
    inputValue1 === "" && input1 !== true ? setInput1(!input1) : null;
    input2 === true
      ? inputValue2 === ""
        ? setInput2(!input2)
        : null
      : setInput2(false);
  }
  function handleClickPassword() {
    inputValue2 === "" && input2 !== true ? setInput2(!input2) : null;
    input1 === true
      ? inputValue1 === ""
        ? setInput1(!input1)
        : null
      : setInput1(false);
  }

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Please Login</h1>
          <div className="form__input" onClick={handleClickEmail}>
            <input
              onChange={(e) => setInputValue1(e.target.value)}
              value={inputValue1}
              type="email"
            />
            <label>
              {"Email".split("").map((letter, i) => (
                <span
                  className={input1 ? "transitionInput" : "normal"}
                  style={{ transition: `${(i + 1) * 50}ms ease-in-out` }}
                  key={i}
                >
                  {letter}
                </span>
              ))}
            </label>
          </div>

          <div className="form__input" onClick={handleClickPassword}>
            <input
              onChange={(e) => setInputValue2(e.target.value)}
              value={inputValue2}
              type="password"
            />
            <label>
              {"Password".split("").map((letter, i) => (
                <span
                  className={input2 ? "transitionInput" : "normal"}
                  style={{ transition: `${(i + 1) * 50}ms ease-in-out` }}
                  key={i}
                >
                  {letter}
                </span>
              ))}
            </label>
          </div>
          <button className="btn">Login</button>
        </form>
        <span>
          Don't have an account? <button>Register</button>
        </span>
      </div>
    </div>
  );
}

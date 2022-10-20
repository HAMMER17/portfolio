import React, { useState, useEffect } from 'react'
import './style/calculator.css'
import { NumericFormat } from 'react-number-format';

const Calculator = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };
  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };
  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  return (
    <div className='calc'>
      <div type="text" className='calc-input'>{input !== "" || input === "0" ? (
        <NumericFormat
          value={input}
          displayType={"text"}
          thousandSeparator={true}
        />
      ) : (
        <NumericFormat
          value={preState}
          displayType={"text"}
          thousandSeparator={true}
        />
      )}</div>
      <div className="calc-item">
        <button className='calc-button grey' onClick={reset}>AC</button>
        <button className='calc-button grey' onClick={percent}>%</button>
        <button className='calc-button grey' onClick={minusPlus}>+/-</button>
        <button className='calc-button orange' onClick={operatorType}>+</button>
        <button className='calc-button' onClick={inputNum}>1</button>
        <button className='calc-button' onClick={inputNum}>2</button>
        <button className='calc-button' onClick={inputNum}>3</button>
        <button className='calc-button orange' onClick={operatorType}>-</button>
        <button className='calc-button' onClick={inputNum}>4</button>
        <button className='calc-button' onClick={inputNum}>5</button>
        <button className='calc-button' onClick={inputNum}>6</button>
        <button className='calc-button orange' onClick={operatorType}>/</button>
        <button className='calc-button' onClick={inputNum}>7</button>
        <button className='calc-button' onClick={inputNum}>8</button>
        <button className='calc-button' onClick={inputNum}>9</button>
        <button className='calc-button orange' onClick={operatorType}>x</button>
        <button className='calc-button ' onClick={inputNum}>0</button>

        <button className='calc-button' onClick={inputNum}>.</button>
        <button className='calc-button zero' onClick={equals}>=</button>
      </div>
    </div>
  )
}

export default Calculator

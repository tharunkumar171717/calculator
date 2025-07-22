import React, { useState,useRef } from 'react'
const Calc = () => {
    const [value, setValue] = useState("")
    const inputValue = useRef();
    function cal() {
        let current = inputValue.current.value;
        setValue(eval(current));     
    }
    function Change(val) {
        setValue((prev) => {
            return prev + val
        });
    }
    function change(e){
        setValue(e.target.value);
    }
  return (
    <div className=''>
      <input type="text" ref={inputValue} value={value} onChange={change} className='ml-0 border border-black'></input>
      <table border={1} style={{ width: "180px" , marginLeft:"500px"}}>
        <tbody>
          <tr>
            <td onClick={() => cal("=")}>=</td>
            <td onClick={()=>Change("*")}>*</td>
            <td onClick={() => Change("/")}>/</td>
          </tr>
          <tr>
            <td onClick={() => Change(1)}>1</td>
            <td onClick={() => Change(2)}>2</td>
            <td onClick={() => Change(3)}>3</td>
          </tr>
          <tr>
            <td onClick={() => Change(4)}>4</td>
            <td onClick={() => Change(5)}>5</td>
            <td onClick={() => Change(6)}>6</td>
          </tr>
          <tr>
            <td onClick={() => Change(7)}>7</td>
            <td onClick={() => Change(8)}>8</td>
            <td onClick={() => Change(9)}>9</td>
          </tr>
          <tr>
            <td onClick={() => Change("+")}>+</td>
            <td onClick={() => Change(0)}>0</td>
            <td onClick={() => Change("-")}>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calc
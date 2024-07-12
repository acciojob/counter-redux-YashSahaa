
import React from "react";
import './../styles/App.css';
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { Decreament, Increament } from "./action";

const App = () => {
  const dispatch = useDispatch()
  const increament = ()=>{
    dispatch({type:Increament})
  }
  const decreament = ()=>{
    dispatch({type:Decreament})
  }
  return (
    <div>
        <Counter increament={increament} decreament={decreament}/>
    </div>
  )
}

export default App

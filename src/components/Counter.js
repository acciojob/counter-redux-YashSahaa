import React from "react";
import { useSelector } from "react-redux";

const Counter = ({ increament , decreament})=>{
    const store = useSelector((state) => state);
    return (
        <>
            <h1>{store.count}</h1>
            <button onClick={increament}>increment</button>
            <button onClick={decreament}>decrement</button>
        </>
    );
}

export default Counter;
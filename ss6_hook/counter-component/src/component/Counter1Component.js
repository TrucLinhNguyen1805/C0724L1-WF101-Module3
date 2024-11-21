import React from "react";
import useIncrement from "./AddCounter";
function Counter1Component (){
    const [count, increase] = useIncrement(1);
    return(
        <div>
            <label>Count 1: {count}</label><br></br>
            <button onClick={increase}>Add</button>
        </div>
    )
}
export default Counter1Component;
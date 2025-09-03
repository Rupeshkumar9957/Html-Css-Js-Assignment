import React, {useState} from 'react'
import './styles.css'
export default function App() {
    var [count,setcount]=useState(0);
    const minus=()=>{
        count--;
        setcount(count)
        console.log(count);
    }
    const plus=()=>{
        count++;
        setcount(count)
        console.log(count);
    }
    return(
        <>
            <div className='btns'>
                <button onClick={minus}>-</button>
                <button>{count}</button>
                <button onClick={plus}>+</button>
            </div>
        </>
    )
}

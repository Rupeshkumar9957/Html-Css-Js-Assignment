import React, {useState} from 'react'
import "./styles.css"
export function Buttons(){
    const [showpassword,setsp] = useState(1);
    const hideshow=()=>{
        setsp(!showpassword);
    }
    return(
        <>
       <div className="ShowHide" >
       <input type={showpassword==1 ? 'password' : 'text'}/>
           <button onClick={hideshow}>{showpassword==1 ? 'Show Password' : 'Hide Password'}</button>
       </div>
            
            
        </>
    )
}

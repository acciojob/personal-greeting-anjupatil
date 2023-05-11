import React,{useState} from "react";

const Form=()=>{

    let [name,setGreeting]=useState("");
     let str="";
    function greeting(e){
        
       
        setGreeting(e.target.value);
        
        
    }
    return(
        <div>
            <label>
                Enter your name:
                <input type="text" value={name} placeholder="Enter your name" onChange={greeting} />
            </label>
           <p>
           {name && <h1>Hello, {name}!</h1>}
           </p>
            
        </div>
    )
}

export default Form;
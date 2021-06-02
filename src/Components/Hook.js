import React, { useEffect, useState }  from 'react'


const Hook=()=>{
/*
    function modifyData()
    {
        if(name==="welcome to India")
            setName("welcome to Telangana")
        else
            setName("welcome to India")
    }   

    <button onClick={modifyData}>Change</button>
*/
    useEffect(
        ()=>{console.log(name+ " is printed")},[]
    )

    let [name,setName]=useState("welcome to India");
   return(
       <div>
           <h1>Hook component</h1>
           state:: {name}
           &nbsp;
           <button onClick={()=>name==="welcome to India"? setName("welcome to Ts"):setName("welcome to India")}>Change</button>
       </div>
   )
}

export default Hook;
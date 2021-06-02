import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles/index.css';

const Home=()=>
{
  

  async function getImage()
  {
    let review=await axios.get(" http://localhost:4000/book");
   
    console.log(review.data);
    card=review.data.map(x=>
      (
        <div className="card" key={x.id}>
  <div className="card-header" style={{fontSize:"12px",fontWeight:"bolder"}}>{x.name}</div>
  <div className="card-body"> <img src={x.image} ></img></div>
  <div className="card-footer"><span style={{color:"darkgreen"}}>{x.author}</span>  &nbsp;<span style={{color:"red"}}>Rs:{x.price}</span>  </div>
</div>
      ))

      setCard(card);
  }

  useEffect(getImage,[]);

 let [card,setCard]=useState();

  
    return(
     <div>
       {card}
       
     </div>
    )
}

export default Home;

/**
 *  let [image,setImage]=useState("");
  let [name,setName]=useState("");
  let [author,setAuthor]=useState("");
  let [price,setPrice]=useState("");
 */
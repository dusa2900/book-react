import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/index.css'


const Contact=()=>
{
    async function getData()
    {
        let response= await axios.get("http://localhost:2000/people")
        console.log(response.data);
        tdata=response.data.map( x=>
            (
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.city}</td>
                </tr>
            )  

        )
        setTdata(tdata)
    }


    async function storeData()
    {
        let data={id:id,name:name,city:city}
        try{
            let response=await axios.post("http://localhost:2000/people",data);
            console.log(response.data);
            getData();
            setId("");
            setName("");
            setCity("");
        }
        catch(e)
        {
            alert("unable to store the data");
        }

    }

    useEffect(getData,[])
    

    let [tdata,setTdata]=useState("");

    let [id,setId]=useState();
    let [name,setName]=useState();
    let [city, setCity]=useState();

    return(
      


        <div  style={{overflow:"hidden"}}>
              <h1>contact component</h1>

              <div className="form" style={{backgroundColor:"aqua"}}>
                    <table>
                        <tr>
                            <th>Id:</th>
                            <td><input type="text" onChange={(e)=>setId(e.target.value)} value={id}/> </td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td><input type="text" onChange={(e)=>setName(e.target.value)} value={name}/> </td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td><input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/> </td>
                        </tr>
                        <tr >
                          <td colSpan="2"  className="btn btn-success"
                           style={{textAlign:"center"}}
                           onClick={storeData}>Store data</td>
                        </tr>
                    </table>
              </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {tdata}
                </tbody>
            </table>
        </div>
    )
}

export default Contact;
import axios from 'axios'
import React,{useEffect,useState} from 'react'
 import  Map from "../mapcomponent/Map.js"


const Useffect = () => {
    const [data,setData]=useState([])
    console.log(data)
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
setData(res.data)
        })
        .catch((err)=>{

        })
    },[])

  return (
    <div>
       < Map data={data} setData={setData}/>
    </div>
  )
}

export default Useffect
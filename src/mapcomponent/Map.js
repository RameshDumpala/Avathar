import React, { useState } from 'react'
import {FcManager} from "react-icons/fc"
import {MdEmail} from "react-icons/md"
import {FaCity} from "react-icons/fa"
import {BsTelephoneFill} from "react-icons/bs"

import "./Map.css"
import Like from "./Like"

const Map = ({data,setData}) => {


  if(data.length===0){
    return  "empty"
   }

  return (
    
    <div className='mainmap_div'>
        {data.map((item,i)=>(
            <div className='map_div'>
                <img className='img' src = {`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=sad`}></img>
               <p className='font'><FcManager className='man_icon'/>:{item.name}</p>    
               <p className='font'><MdEmail className='email_icon'/>:{item.email}</p> 
               <p className='font'><BsTelephoneFill className='city_icon' />:{item.phone}</p> 
               <p className='font'><FaCity className='city_icon' />:{item.address.city}</p> 
         <Like setData={setData} data={data} i={i} item={item} />
            </div>
        ))}
    </div>

  )
}

export default Map
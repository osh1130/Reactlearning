import React, { useEffect, useState } from 'react'

export default function() {
  const [msg,setmsg]=useState("vivi")
  const [num,setnum]=useState(1)

  useEffect(()=>{
    console.log("msg update")
  },[msg])
  
  return ( 
    <div>
        <h2>{msg}</h2>
        <br/>
        <h2>{num}</h2>
        <button onClick={()=>setmsg("vivian")}>msgg</button>
        <br/>
        <button onClick={()=>setnum(num+1)}>number</button>
    </div>
  )
}

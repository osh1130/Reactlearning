import React, { useRef, useState } from 'react'

export default function App6() {
    const element = useRef(null);
    const [msg,setMsg]=useState("")
  return (
    <>
    <input type="text" ref={element} />
    <button onClick={()=>console.log(element.current.value)}>不受控</button>
    <br/>
    <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} />
    <button onClick={()=>console.log(msg)}>受控</button>
    </>
  )
}

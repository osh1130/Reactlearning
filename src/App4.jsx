import React,{ useState } from 'react'

function Child(props) {
    return (
      <>
      <h2>child--{props.num}</h2>
      <button onClick={()=>props.SetNum(567)}>set</button>
      </>
    )
  }

function Father(props) {
    return (
      <Child num={props.num} SetNum={props.SetNum}/>
    )
  }
    

export default function App4() {
  const[num,SetNum]=useState(123)
  return (
    <Father num={num} SetNum={SetNum}/>
  )
}

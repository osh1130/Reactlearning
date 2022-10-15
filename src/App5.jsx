import React,{ createContext, useState,memo, useContext } from 'react'
const NumContext = createContext()

const Child= memo(()=> {
    const {num,SetNum}= useContext(NumContext)
    console.log(11111)
    return (
      /*<NumContext.Consumer>{
        ({num,SetNum}) => (
            <>
            <h2>{num}</h2>
            <button onClick={()=>SetNum(456)}>modify</button>
            </>
        )
        }
      </NumContext.Consumer>
      */
     <>
     <h2>{num}</h2>
          <button onClick={()=>SetNum(456)}>modify</button>
          </>
    )
  })

function Father() {
    return (
      <Child />
    )
  }
    

export default function App5() {
  const[num,SetNum]=useState(123)
  return (
    <>
    <button onClick={()=>SetNum(num+1)}>button</button>
    <NumContext.Provider value={{num,SetNum}}>
        <Father />
    </NumContext.Provider>
    </>
  )
}

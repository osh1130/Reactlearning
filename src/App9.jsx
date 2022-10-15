import React, { Component } from 'react'
import { connect } from 'react-redux'

function App9(props) {
    return (
      <div>
        <h2>msg:{props.msg}</h2>
        <button onClick={()=>props.change()}>change</button>
        <br/>
        <h2>num:{props.num}</h2>
        <button onClick={()=>props.add()}>addon</button>
      </div>
    )
}

//state是reducer刚刚返回的state
const mapStateToProps = (state) => ({msg:state.msg,num:state.num})

const mapDispatchToProps = (dispatch) =>{
    return{
      change(){
            const action={type:"changemsg",value:"vivi"}
            dispatch(action)
        },
      add(){
          const action={type:"addnum",value:2}
          dispatch(action)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App9)
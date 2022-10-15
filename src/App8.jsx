import React, { Component } from 'react'
import { connect } from 'react-redux'

function App8(props) {
    return (
      <div>
        <h2>num:{props.num}</h2>
        <button onClick={()=>props.add()}>addon</button>
      </div>
    )
}

//state是reducer刚刚返回的state
const mapStateToProps = (state) => ({num:state.num})

const mapDispatchToProps = (dispatch) =>{
    return{
        add(){
            const action={type:"addnum",value:2}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App8)
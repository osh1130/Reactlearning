import React, { Component } from 'react'
import './com.css';

export default class extends Component {
    state={
      ass:['news','sport','knowage'],
      activenum:0
    }
    render() {
      return (
        <div className='banner'>
          <ul>
            {
              this.state.ass.map((item,index)=>{
                return <li key={index} onClick={this.hand.bind(this,index)} className ={this.state.activenum==index?"active":""}>{item}</li>
              })
            }
          </ul>
          <ol>
            {
              this.state.ass.map((item,index)=>{
                return <li key={index} className={this.state.activenum==index?"active":""}>{item}</li>
              })
            }
          </ol>
        </div>
      )
      }
      hand(index){
        this.setState({activenum: index})
      }
}

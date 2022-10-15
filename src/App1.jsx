import React, { Component } from 'react'

export default class App1 extends Component {
  state = {
    number:1,
    username:"hello",
    arr:["1","2","3"]
  }
  render() {
    return (
      <div>
        <h2>num:{this.state.number}</h2>
        <h2>name:{this.state.username}</h2>
        {/*<button onClick={this.setState({num:this.state.number+1})}>add</button>
        <button onClick={()=>this.setState({number  :this.state.number+1})}>add</button>*/}
        <br/>
        <ul>
          {
          this.state.arr.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
          }
        </ul>
        <button onClick={this.click.bind(this)}>addon</button>
        <br/>
        <button onClick={this.clickname.bind(this)}>changename</button>
        <br/>
        <button onClick={this.additem.bind(this)}>additem</button>
      </div>
    )
  }
  click(){
    this.setState({number:this.state.number+1})
  }
  clickname(){
    this.setState({username:"vivi"})
  }
  additem(){
    let newarr=JSON.parse(JSON.stringify(this.state.arr));
    newarr.push("4");
    this.setState({arr:newarr})
  }
}

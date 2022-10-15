import React from 'react';

let arr=["a","b","c"]
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>hello</h1>
                <input type="text"></input>
                <hr />
                <ul>{
                    arr.map((item,index)=><li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default App

import Box from './components/Box.css';
import React from 'react';

class App extends React.Component {
 state = {num: true}

Click = ()=> {
  this.setState((num)=>({num: !this.state.num}))
  console.log(this.state.num);
}

  render ( ){
    return (<div className="mainBox" > 
      <button onClick={this.Click}> show me !!!</button>
      
      
          {this.state.num? <div className="InnerBox" ></div> : "lets try again"}
      
      </div>)
  }
}


export default App;

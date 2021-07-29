import Box from "./components/Box.css"
import React from "react";


// class App extends React.Component {
//  state = {num: true}

// Click = ()=> {
//   this.setState((num)=>({num: !this.state.num}))
//   console.log(this.state.num);
// }

//   render ( ){
//     return (<div className="mainBox" >
//       <button onClick={this.Click}> show me !!!</button>

//           {this.state.num? <div className="InnerBox" ></div> : "lets try again"}

//       </div>)
//   }
// }

class App extends React.Component {
  state = { axel: 0 };


Up = () => {
    this.setState(()=>({axel: this.state.axel + 1}))
    console.log("its going up");
  }
  
  Down =() => {
    this.setState(()=>({axel: this.state.axel - 1})
  

    )
  }




  render() {
    return(
    <div className="mainBox" >
      <h3>lets play</h3>
      <button onClick={this.Up}>increase </button>
      <p>{this.state.axel}</p>
      <button onClick={this.Down}>decrease </button>
      
      
      
       </div> )
    
  }
}

export default App;



import React from 'react';

class App extends React.Component {
 state = {num: 0}

handleClick =() => {
this.setState({num: this.state.num + 1}, () =>{
  console.log(this.state.num)
})
}


  render ( ){
    return <div> 
      <button onClick={this.handleClick}> lets roll</button>
      
      {this.state.num}
      <br />
      welcome back  </div>
  }
}


export default App;

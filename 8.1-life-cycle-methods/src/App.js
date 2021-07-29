
import React from "react";



class App extends React.Component{
 state= { favoritecolor: "green"}
 someIdRef = React.createRef();

 componentDidMount (){
  setTimeout(()=>{ 
    this.setState({favoritecolor:"blue"})
  },5000)}

  componentDidUpdate(){
    const cat = document.querySelector("#frodo")
    cat.innerText= `The updated favorite color is ${this.state.favoritecolor}`
  }
  render(){
    return(
      <div>
        <h1>my favorite color is {this.state.favoritecolor},whohoo!!!</h1>
        <div  id="frodo" ref={this.someIdRef}></div>
      </div>
    )
  }


 }



export default App;

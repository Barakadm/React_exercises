

import React from 'react';
import Cards from './components/Cards'

// function App() {
//   return (
//     <div>
//       <Cards image="https://source.unsplash.com/random/800x600" title="title1" description="hello morning i am so excited">
//         <a href="#">link 1</a>
//         <a href="#">link 2</a>
//       </Cards>
//       <Cards image="https://source.unsplash.com/random/1000x700" title="title2" description="lets get going! ">
//         <a href="#">link 3</a>
//         <a href="#">link 4</a>
//       </Cards>
//       <Cards image="https://source.unsplash.com/random/900x800" title="title3" description="getting closer with react ">
//         <a href="#">link 5</a>
//         <a href="#">link 6</a>
//         <a href="#">link 7</a>
//       </Cards>
//     </div>
//   );
// }

class App extends React.Component {
  render (){
    return (
    <div>
      <Cards image="https://source.unsplash.com/random/800x600" title="title1" description="hello morning i am so excited">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </Cards>
      <Cards image="https://source.unsplash.com/random/1000x700" title="title2" description="lets get going! ">
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </Cards>
      <Cards image="https://source.unsplash.com/random/900x800" title="title3" description="getting closer with react ">
        <a href="#">link 5</a>
        <a href="#">link 6</a>
        <a href="#">link 7</a>
      </Cards>
    </div>
    )
  }
}


export default App;

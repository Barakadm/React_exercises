import logo from './logo.svg';
import './App.css';

function App() {

const data = ["hello ", "world"];

const number1 = 5;
const number2 =6;

const string = "I love React!";
  return (
    
    <div className="App">
      <div>
      
      <h1>{data[0]+ data[1]}</h1>
      </div>
      <div>
        <h2>the result is {number1 + number2}</h2>

      </div>
      
      <div>
        <h3>the length of this paragraph is {string.length}</h3>

      </div>


    </div>
  );
}

export default App;

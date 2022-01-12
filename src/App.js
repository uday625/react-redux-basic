import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  // const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='main'>
          <div><button onClick={()=>setcounter(counter-1)}>-</button></div>
          <div>{counter}</div>
          <div><button onClick={()=>setcounter(counter+1)}>+</button></div>
        </div>
      </header> */}
      <Counter/>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 20;
    }
    setCounter(counter);
  }
  const remove = () => {
    counter = counter - 1;
    if (counter === -1) {
      counter = 0;
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br></br>
      <br></br>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App

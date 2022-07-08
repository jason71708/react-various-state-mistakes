import React from 'react'
import IntervalComponent from './IntervalComponent';
import InvalidIntervalComponent from './InvalidIntervalComponent'

function App() {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState(0);

  return (
    <div className="App">
      <h1>App Number: {number}</h1>
      <button onClick={() => setOpen(!open)}>Toggle Open</button>
      <button onClick={() => setNumber(number+1)}>Increase Number</button>
      <br />
      <h2>IntervalComponent</h2>
      {open && <IntervalComponent number={number}/>}
      <br />
      <h2>InvaildIntervalComponent</h2>
      {open && <InvalidIntervalComponent number={number}/>}
    </div>
  );
}

export default App;

import React from 'react'
import IntervalComponent from './IntervalComponent';

function App() {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState(0);

  return (
    <div className="App">
      <h1>App Number: {number}</h1>
      <button onClick={() => setOpen(!open)}>Open</button>
      <button onClick={() => setNumber(number+1)}>Increase number</button>
      <br />
      {open && <IntervalComponent number={number}/>}
    </div>
  );
}

export default App;

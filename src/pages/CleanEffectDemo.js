import React from 'react'
import IntervalComponent from '../cases/IntervalComponent';
import InvalidIntervalComponent from '../cases/InvalidIntervalComponent'

const CleanEffectDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState(0);
  
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => setOpen(!open)}>Toggle Open</button>
      <button onClick={() => setNumber(number+1)}>Increase Number</button>
      <br />
      <h2>Invaild Interval Component</h2>
      {open && <InvalidIntervalComponent number={number}/>}
      <br />
      <h2>Interval Component</h2>
      {open && <IntervalComponent number={number}/>}
    </div>
  )
};

export default CleanEffectDemo;

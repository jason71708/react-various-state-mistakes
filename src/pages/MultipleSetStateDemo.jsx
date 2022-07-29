import React from 'react'
import OnlyUpdateStateOnceComponent from '../cases/OnlyUpdateStateOnceComponent';
import MultipleUpdateStateComponent from '../cases/MultipleUpdateStateComponent';

const MultipleSetStateDemo = () => {

  return (
    <div>
      <h1>Only Update State Once Component</h1>
      <OnlyUpdateStateOnceComponent />
      <br />
      <h1>Multiple Update State Component</h1>
      <MultipleUpdateStateComponent />
    </div>
  )
}

export default MultipleSetStateDemo;
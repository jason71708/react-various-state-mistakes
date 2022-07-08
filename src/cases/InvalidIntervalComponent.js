import React from "react";

const InvalidIntervalComponent = ({number}) => {

  React.useEffect(() => {
    setInterval(() => {
      console.log('InvalidIntervalComponent: ', number)
    }, 2000 )
  }, [number])
  return (
    <h3>{number}</h3>
  )
}

export default InvalidIntervalComponent;

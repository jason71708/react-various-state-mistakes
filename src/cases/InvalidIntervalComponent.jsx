import React from "react";

const InvalidIntervalComponent = ({number}) => {

  React.useEffect(() => {
    setInterval(() => {
      window.customConsoleLog('InvalidIntervalComponent: ', number)
    }, 2000 )
  }, [number])
  return (
    <h3>{number}</h3>
  )
}

export default InvalidIntervalComponent;

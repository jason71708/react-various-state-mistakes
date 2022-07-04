import React from "react";

const IntervalComponent = ({number}) => {
  const timeId = React.useRef(null);

  React.useEffect(() => {
    timeId.current = setInterval(() => {
      console.log('IntervalComponent: ', number)
    }, 2000 )

    return () => {
      clearInterval(timeId.current)
      timeId.current = null
    }
  }, [number])
  return (
    <h3>{number}</h3>
  )
}

export default IntervalComponent;

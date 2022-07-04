import React from "react";

const AsyncActionComponent = ({number}) => {
  const timeId = React.useRef(null);

  React.useEffect(() => {
    timeId.current = setInterval(() => {
      console.log('current: ', number)
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

export default AsyncActionComponent;

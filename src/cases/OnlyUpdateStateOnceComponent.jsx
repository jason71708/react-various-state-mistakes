import React from 'react'

const OnlyUpdateStateOnceComponent = () => {
  const [num, setNum] = React.useState(0)

  const plusOneThreeTimes = () => {
    setNum(num+1)
    setNum(num+1)
    setNum(num+1)
  }

  return (
    <div>
      <button onClick={plusOneThreeTimes}>Add 1 three times</button>
      <p>{num}</p>
    </div>
  )
}

export default OnlyUpdateStateOnceComponent
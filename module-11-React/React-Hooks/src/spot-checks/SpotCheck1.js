import React, {useState} from 'react'

export default function SpotCheck1() {
  
  const counterState = useState(1)
  const counterValue = counterState[0]
  const setCounterValue = counterState[1]

  const incrementCounter = () => setCounterValue(counterValue + 1)
  const decrementCounter = () => setCounterValue(counterValue - 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <p>{counterValue}</p>
        <button onClick={incrementCounter}>Increase</button>
        <button onClick={decrementCounter}>Decrease</button>
      </div>
    </div>
  )
}

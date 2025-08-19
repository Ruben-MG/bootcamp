import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const IncrementGood = () =>setGood(good +1)
  const IncrementNeutral = () =>setNeutral(neutral +1)
  const IncrementBad = () =>setBad(bad +1)

  const ButtonCounter = () => {
    return(
      <div>
        <button onClick={IncrementGood}>good</button>
        <button onClick={IncrementNeutral}>neutral</button>
        <button onClick={IncrementBad}>bad</button>
      </div>
    )
  }

  const PrintCounter = () => {
      return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>)
  }

  const PrintAllCounter = () => {

    var total = good+neutral+bad
    var average = ((good-bad)/total)*100
    var positive = (good/total)*100
    return ( 
      <div>
        <p>All: {total}</p>
        <p>Average: {average.toFixed(2)}%</p>
        <p>Positive: {positive.toFixed(2)}%</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <ButtonCounter/>
      <h1>Statistics</h1>
      <PrintCounter/>
      <PrintAllCounter/>
    </div>
  )
}

export default App
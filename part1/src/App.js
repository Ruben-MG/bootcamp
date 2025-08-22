import { useState } from "react";

const StatisticLine = ({ value, text }) => (
  <p>
    {value} {text}
  </p>
);

const ButtonCounter = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const AllCounters = ({ good, neutral, bad }) => {
  var total = good + neutral + bad;
  var average = (((good - bad) / total) * 100).toFixed(2);
  var positive = ((good / total) * 100).toFixed(2);
  return total === 0 ? (
    <p>We don't have any statistics yet</p>
  ) : (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All: </td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average: </td>
            <td>{average} %</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Print = () => {
  return (
    <div>
      <table>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <ButtonCounter text="good" onClick={() => setGood(good + 1)} />
      <ButtonCounter text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <ButtonCounter text="bad" onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <AllCounters good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

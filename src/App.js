import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(0);
  const count = Math.round((value / step) * 30.4);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepUp() {
    setStep(step + 1);
  }

  function handleStepDown() {
    setStep(step - 1);
  }

  function handleReset() {
    setValue(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <button onClick={handleStepDown}>-</button>
        <span>
          Step:
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          {step}
        </span>
        <button onClick={handleStepUp}>+</button>
      </div>
      <div>
        <span>Count: </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slice/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;

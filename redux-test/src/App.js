import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const increment = () => {
    return dispatch({ type: 'INC' });
  };
  const decrement = () => {
    return dispatch({ type: 'DEC' });
  };
  const valFunc = (e) => {
    setVal(e.target.value);
  };

  const [val, setVal] = useState(0);

  const addValue = (val) => {
    console.log(val);
    return dispatch({ type: 'addVal', payload: val });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <br />
      <input type="number" onChange={valFunc} value={val} />
      <button onClick={() => addValue(val)}>Add By</button>
    </div>
  );
}

export default App;

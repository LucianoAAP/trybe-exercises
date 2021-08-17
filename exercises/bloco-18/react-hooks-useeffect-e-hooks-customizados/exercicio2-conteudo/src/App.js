import React, { useState } from 'react';
import './App.css';
import useArray from './useArray';

function App() {
  const [ task, setTask ] = useState('');
  const [array, addToArray] = useArray([]);
  const handleInput = ({ target }) => {
    setTask(target.value);
  };
  const handleClick = (task) => {
    addToArray(task);
    setTask('');
  };
  return (
    <div className="App">
      <input type="text" value={ task } onChange={ handleInput } />
      <button type="button" onClick={ () => handleClick(task) }>Add</button>
      { array.length !==0 && array.map((task) => <li key={ task }>{ task }</li>) }
    </div>
  );
}

export default App;

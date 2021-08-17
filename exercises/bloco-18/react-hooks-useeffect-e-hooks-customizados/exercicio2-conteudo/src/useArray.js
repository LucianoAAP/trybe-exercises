import { useState } from 'react';

const useArray = () => {
  const [array, setArray] = useState([]);
  const addToArray = (task) => {
    setArray([...array, task]);
  };
  return [array, addToArray];
};

export default useArray;

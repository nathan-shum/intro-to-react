import React, { useState, useEffect } from 'react';

const NotHome = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }
    if (counter > 5) {
      setMessage("You passed 5!");
    } else {
      setMessage('');
    }
  }, [counter]);

  return (
    <div className="flex flex-col items-center">
      <h1>Not Home Page</h1>
      <p>Counter: {counter}</p>
      {message && <p className="text-green-500">{message}</p>}
      <div className="mt-4">
        <button onClick={() => setCounter(counter + 1)} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Increase</button>
        <button onClick={() => setCounter(counter - 1)} className="bg-red-500 text-white px-4 py-2 rounded">Decrease</button>
      </div>
    </div>
  );
};

export default NotHome;
import { useState, useEffect } from 'react';

function Clicker({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('считаем: ' + name);
  }, [count]);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 text-lg"
    >
      {name}: {count}
    </button>
  );
}

export default Clicker;
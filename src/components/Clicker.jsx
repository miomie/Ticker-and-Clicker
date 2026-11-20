import { useState, useEffect } from 'react';

function Clicker(props) {
  const [count, setCount] = useState(0);
  useEffect(function () {
    console.log('считаем: ' + props.name);
  }, [props.name]);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 text-lg"
    >
      {props.name}: {count}
    </button>
  );
}

export default Clicker;
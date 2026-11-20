import { useState, useEffect } from 'react';

function Ticker() {
  const [tick, setTick] = useState(0);
  useEffect(function () {
    const intervalId = setInterval(function () {
      console.log('тик');
      setTick(function (prev) {
        return prev + 1;
      });
    }, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-4 bg-gray-100 rounded-lg p-4 text-center">
      <p className="text-gray-600">Прошло секунд:</p>
      <p className="text-2xl font-bold">{tick}</p>
    </div>
  );
}

export default Ticker;
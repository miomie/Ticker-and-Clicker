import { useState, useEffect } from 'react';

function Ticker() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('тик');
      setTick((prev) => prev + 1);
    }, 1000);

    return () => {
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
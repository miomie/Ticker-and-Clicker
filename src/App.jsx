import { useState } from 'react';
import Clicker from './components/Clicker';
import Ticker from './components/Ticker';

function App() {
  const [buttonName, setButtonName] = useState('Кликнуть');
  const [showTicker, setShowTicker] = useState(true);

  function changeName() {
    if (buttonName === 'Кликнуть') {
      setButtonName('Нажать');
    } else {
      setButtonName('Кликнуть');
    }
  }
  function toggleTicker() {
    setShowTicker(!showTicker);
  }

  return (
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <div className="mb-6">
          <Clicker name={buttonName} />
          <button
            onClick={changeName}
            className="w-full mt-3 bg-gray-200 hover:bg-gray-300 rounded-lg p-3"
          >
            Сменить имя кнопки
          </button>
        </div>
        <div>
          <button
            onClick={toggleTicker}
            className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-lg p-3"
          >
            {showTicker ? 'Скрыть тикер' : 'Показать тикер'}
          </button>
          {showTicker && <Ticker />}
        </div>
      </div>
  );
}

export default App;
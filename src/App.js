import React , { useState, useEffect } from 'react'
import './App.css';
import TimerForm from './timerForm';
import TimerList from './timerList';


function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      remainingTime: seconds * 1000, 
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(timers => timers.map(timer => ({
        ...timer,
        remainingTime: timer.remainingTime - 10,
      })).filter(timer => timer.remainingTime > 0));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="left">
        <TimerList timers={timers} removeTimer={removeTimer} />
      </div>
      <div className="right">
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function TimerForm({ addTimer }) {
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(seconds);
      setSeconds('');
    }
  };

  return (
    <div>
      <h2>New Timer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="Enter seconds"
          required
        />
        <button type="submit">Add Timer</button>
      </form>
    </div>
  );
}

export default TimerForm;

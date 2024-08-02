import React from 'react';

function TimerList({ timers, removeTimer }) {
  return (
    <div>
      <h2>Timers</h2>
      <ul>
        {timers.map(timer => (
          <li key={timer.id}>
            <div>
              Created At: {timer.createdAt}
            </div>
            <div>
              Remaining Time: {(timer.remainingTime / 1000).toFixed(2)}s
            </div>
            <button onClick={() => removeTimer(timer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimerList;

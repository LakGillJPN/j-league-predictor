import { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <>
      {timeRemaining.total > 0 ? (
        <>
          <div>
            {formatTime(timeRemaining.days)} days&nbsp;
            {formatTime(timeRemaining.hours)}:
            {formatTime(timeRemaining.minutes)}:
            {formatTime(timeRemaining.seconds)}
          </div>
        </>
      ) : (
        <div>Time's up!</div>
      )}
    </>
  );
};

export default CountdownTimer;
import { useState, useEffect } from 'react';

function IndianTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(date.getTime() + istOffset);

      const hours = String(istTime.getUTCHours()).padStart(2, '0');
      const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
      const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div>
      <h1 className='text-xs'>{time}</h1>
    // </div>
  );
}

export default IndianTime;

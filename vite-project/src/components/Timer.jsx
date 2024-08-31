import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime }) => {
  const calculateTimeLeft = () => {
    const difference = initialTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return (
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Offer Ends in :</h2>
      <div className="flex justify-center space-x-3 text-lg">
        <div className="bg-gray-200 text-black rounded p-2">
          <span className="font-semibold">{timeLeft.hours.toString().padStart(2, '0')}</span>
        </div>
        <span>:</span>
        <div className="bg-gray-200 text-black rounded p-2">
          <span className="font-semibold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        </div>
        <span>:</span>
        <div className="bg-gray-200 text-black rounded p-2">
          <span className="font-semibold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;

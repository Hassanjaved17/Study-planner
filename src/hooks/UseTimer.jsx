import { useEffect, useState } from "react";

const UseTimer = (initialTime = 25 * 60) => {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return initialTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, initialTime]);

  return {
    time,
    running,
    start: () => setRunning(true),
    pause: () => setRunning(false),
    reset: () => {
      setRunning(false);
      setTime(initialTime);
    },
  };
};

export default UseTimer;

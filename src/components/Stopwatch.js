import { Button } from "antd";
import React, { useState, useEffect } from "react";

const Stopwatch = ({ time, setTime }) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h3 style={{ color: "white" }}>{formatTime(time)}</h3>
      <Button onClick={handleStart}>Start</Button>
      <Button style={{ marginLeft: "3%" }} onClick={handleStop}>
        Stop
      </Button>
      <Button style={{ marginLeft: "3%" }} onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Stopwatch;

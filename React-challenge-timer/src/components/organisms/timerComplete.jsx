import React, { useState, useEffect } from 'react';
import { TimerSection } from "../molecules/timerSection";
import './organisms.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => prevMinutes + 1);
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    };

    return (
            <div className="timer-container">
                <h1 className="timer-title">Timer</h1>
                <TimerSection 
                    minutes={minutes}
                    seconds={seconds}
                    onStart={handleStart}
                    onStop={handleStop}
                    onReset={handleReset}
                    isRunning={isRunning}
                />
            </div>
    );
};

export default Timer;
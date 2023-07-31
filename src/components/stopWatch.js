import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef();

    const handleStartPause = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (timeInMilliseconds) => {
        const minutes = Math.floor(timeInMilliseconds / 60000);
        const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
        const milliseconds = (timeInMilliseconds % 1000).toString().slice(0, 2);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1>Stopwatch</h1>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{formatTime(time)}</p>
            <button style={{ fontSize: '16px', padding: '8px 16px', margin: '5px', background: '#0099CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleStartPause}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button style={{ fontSize: '16px', padding: '8px 16px', margin: '5px', background: '#0099CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default Stopwatch;

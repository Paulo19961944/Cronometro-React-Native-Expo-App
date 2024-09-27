import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Main() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0); // tempo em segundos

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, time]);

    const handleStartStop = () => {
        if (isRunning) {
            // Se o cronômetro estiver rodando, zera o tempo
            setTime(0);
        }
        setIsRunning(prev => !prev); // Alterna entre iniciar e encerrar
    };

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cronômetro JS</Text>
            <Text style={styles.text}>{formatTime(time)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleStartStop}>
                <Text style={styles.buttonText}>{isRunning ? 'Encerrar' : 'Iniciar'}</Text>
            </TouchableOpacity>
        </View>
    );
}

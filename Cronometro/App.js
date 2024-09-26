import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [miliseconds, setMiliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setMiliseconds((prev) => prev + 10);
      }, 10);
    }
  };

  const pause = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setMiliseconds(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    const milis = ('0' + ((time % 1000) / 10)).slice(-2);
    const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    return `${minutes}:${seconds}:${milis}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(miliseconds)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={start} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pause} style={styles.button}>
          <Text style={styles.buttonText}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.button}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text>
      <Text style={styles.counter}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>Entrou</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrementar}>
          <Text style={styles.buttonText}>Saiu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  counter: {
    fontSize: 80,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

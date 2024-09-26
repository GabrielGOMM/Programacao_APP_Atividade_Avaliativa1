import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import quotes from './quotes';

console.log('Quotes array:', quotes);

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    console.log('Quotes length:', quotes.length);
    if (!quotes || quotes.length === 0) {
      console.error('O array de citações está vazio');
      return {
        quote: 'Nenhuma citação disponível.',
        author: '',
        image: null,
      };
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log('Random index:', randomIndex);
    console.log('Selected quote:', quotes[randomIndex]);
    return quotes[randomIndex];
  }

  function handleNewQuote() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"{currentQuote.quote}"</Text>
      <Text style={styles.author}>- {currentQuote.author}</Text>
      {currentQuote.image && (
        <Image
          source={currentQuote.image}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <TouchableOpacity onPress={handleNewQuote} style={styles.button}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#4E8CFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

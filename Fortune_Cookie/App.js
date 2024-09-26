import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import closedBiscuit from './assets/biscoitoFechado.png';
import openBiscuit from './assets/biscoitoAberto.png';

const FRASES = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Acredite em si próprio e todo o resto virá naturalmente.',
  'A jornada de mil milhas começa com um único passo.',
  'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
  'Transforme seus sonhos em metas e suas metas em conquistas.',
  'A persistência é o caminho do êxito.',
  'Cada dia é uma nova oportunidade para mudar a sua vida.',
  'A gratidão transforma o que temos em suficiente.',
  'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
  'Aprenda com o passado, viva o presente e sonhe com o futuro.',
  'A felicidade não é um destino, mas uma maneira de viajar.',
  'O conhecimento é a única ferramenta que você carrega consigo para mudar o mundo.',
  'Não espere por oportunidades, crie-as.',
  'A coragem não é a ausência do medo, mas a conquista dele.',
  'Seja a mudança que você deseja ver no mundo.',
  'Grandes realizações exigem tempo.',
];

export default function App() {
  const [img, setImg] = useState(closedBiscuit);
  const [textoFrase, setTextoFrase] = useState('');
  const [lastIndex, setLastIndex] = useState(null);

  const quebrarBiscoito = useCallback(() => {
    if (FRASES.length === 0) return;

    let numeroAleatorio;

    do {
      numeroAleatorio = Math.floor(Math.random() * FRASES.length);
    } while (numeroAleatorio === lastIndex && FRASES.length > 1);

    setLastIndex(numeroAleatorio);
    setTextoFrase(`"${FRASES[numeroAleatorio]}"`);
    setImg(openBiscuit);
  }, [lastIndex]);

  const reiniciarBiscoito = useCallback(() => {
    setTextoFrase('');
    setImg(closedBiscuit);
    setLastIndex(null);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      {textoFrase !== '' && <Text style={styles.textoFrase}>{textoFrase}</Text>}
      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>
      {textoFrase !== '' && (
        <TouchableOpacity
          style={[styles.botao, styles.botaoReiniciar]}
          onPress={reiniciarBiscoito}
        >
          <Text style={[styles.textoBotao, styles.textoBotaoReiniciar]}>
            Reiniciar Biscoito
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  img: {
    width: 230,
    height: 230,
    marginBottom: 40,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    marginHorizontal: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 40,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  botaoReiniciar: {
    marginTop: 15,
    borderColor: '#121212',
    backgroundColor: '#f0f0f0',
  },
  textoBotao: {
    fontSize: 18,
    color: '#dd7b22',
    fontWeight: 'bold',
  },
  textoBotaoReiniciar: {
    color: '#121212',
  },
});

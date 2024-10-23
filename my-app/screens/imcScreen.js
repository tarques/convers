import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const imcScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
    setResultado(imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" color="#808080" onPress={calcularIMC} />
      {resultado && (
        <Text style={styles.resultado}>Seu IMC: {resultado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#ffffff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff',
  },
});

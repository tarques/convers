import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const medidaScreen = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);
  
  const converterMedida = () => {
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico)) {
      alert('Por favor, insira um número válido.');
      return;
    }
    
    const resultadoEmCentimetros = valorNumerico * 100;
    setResultado(resultadoEmCentimetros.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor Medida</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor em metros"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Converter" color="#808080" onPress={converterMedida} />
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado} cm</Text>
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



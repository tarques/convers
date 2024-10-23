import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const HomeScreen = () => {
    const navigation = useState();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convers</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora Imc')}
      >
        <Text style={styles.buttonText}>Calculadora IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Conversor Medidas')}
      >
        <Text style={styles.buttonText}>Conversor de Medidas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Conversor Moeda')}
      >
        <Text style={styles.buttonText}>Conversor de Moedas</Text>
      </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

}

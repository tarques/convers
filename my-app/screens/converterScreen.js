import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Picker } from 'react-native';
import axios from 'axios';


const converterScreen = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');z
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/BRL');
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    
    if (fromRate && toRate) {
      const conversionRate = toRate / fromRate;
      return (amount * conversionRate).toFixed(2);
    }
    return null;
  };

  const handleConversion = () => {
    const convertedAmount = convertCurrency(parseFloat(amount), fromCurrency, toCurrency);
    setResult(convertedAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Picker
        selectedValue={fromCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setFromCurrency(itemValue)}>
        <Picker.Item label="Real (BRL)" value="BRL" />
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
      </Picker>

      <Picker
        selectedValue={toCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setToCurrency(itemValue)}>
        <Picker.Item label="Real (BRL)" value="BRL" />
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
      </Picker>

      <Button title="Converter" onPress={handleConversion} color="#333" />

      {result && (
        <Text style={styles.result}>
          Resultado: {result} {toCurrency}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#001f3f',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
});


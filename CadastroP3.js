import React, { useState } from 'react';

import { View, Text, Switch, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const CadastroP3 = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [text, setText] = useState('Mostrar Senha');

  const togglePasswordVisibility = () => {

    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.tituloPrincipal}>Create a Password</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          secureTextEntry={!isPasswordVisible}
        />
        <View >
          <Text style={styles.label} value={isPasswordVisible} onPress={togglePasswordVisibility}>{isPasswordVisible ? 'Esconder Senha' : 'Mostrar Senha'}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
            onPress={() => navigation.navigate('Verificacao')}>Sign up</Text>
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
    alignItems: 'center',
  },
  switchPassword: {

  },
  scwitchContainer: {
    flexDirection: 'row'
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 8
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    padding: 10,
    borderRadius: 50,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#41c485',
    borderRadius: 50,
    padding: 13,
    marginTop: 20,
    marginBottom: 40
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 500,
  },
  viewSocialMedia: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50, // Define as bordas arredondadas para criar um círculo
    margin: 10,
  }
});
export default CadastroP3;
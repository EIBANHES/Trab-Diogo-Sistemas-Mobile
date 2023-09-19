import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CadastroP2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.tituloPrincipal}>What’s your email?</Text>
        <Text style={styles.label}>Endereço Email</Text>
        <TextInput
          placeholder='Email Address'
          keyboardType=''
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
            onPress={() => navigation.navigate('Create Password')}>Next</Text>
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
  tituloPrincipal: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 40,
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
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
export default CadastroP2;
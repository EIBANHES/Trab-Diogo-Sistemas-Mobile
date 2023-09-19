import React, { useState } from 'react';

import { View, Text, Switch, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const Verificacao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.tituloPrincipal}>Verifique o Token de Acesso</Text>
        <Text style={styles.subtitulo}>Please enter the code we sent you to email</Text>

        <View style={styles.token}>
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
        </View>
        <Text style={styles.receive}>Didn't Receive OTP ?</Text>
        <Text style={styles.receiveColor}>Resend Code</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
            onPress={() => navigation.navigate('Verificacao')}>Verify</Text>
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

  token: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 12,
    color: '#C4C4C4',
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 30
  },
  receive: {
    fontSize: 12,
    color: '#C4C4C4',
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 15
  },
  receiveColor: {
    fontSize: 12,
    color: '#41C485',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 15
  },
  label: {
    textAlign: 'center',
  },
  input: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    textAlign: 'center',
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

});
export default Verificacao;
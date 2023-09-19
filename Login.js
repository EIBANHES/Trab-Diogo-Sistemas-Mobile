import React from 'react';
import { View, Image, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>Login</Text>
            <Text style={styles.subtitulo}>Hi, Welcome</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Enter your email"
                    keyboardType='email-address'
                    style={styles.input}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={() => navigation.navigate('CadastroP1')}>Login</Text>
                </TouchableOpacity>
                <Text
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgotten your password?
                </Text>
            </View>

            <View>
                <Text
                    style={styles.createAccount}
                    onPress={() => navigation.navigate('CadastroP1')}>
                   Create account?
                    
                </Text>
                <Text
                    style={styles.createAccount}>
                </Text>
            </View>

            <View style={styles.viewSocialMedia}>
                <Image
                    source={require('./src/Group 12.png')}
                    style={styles.image}
                />
                <Image
                    source={require('./src/Group 13.png')}
                    style={styles.image}
                />
                <Image
                    source={require('./src/Group 14.png')}
                    style={styles.image}
                />
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
        fontSize: 25,
        marginBottom: 10,
    },
    h1: {
        fontSize: 20,
        fontWeight: 600,
    },
    subtitulo: {
        fontSize: 22,
        fontWeight: 400,
        color: '#C4C4C4',
        marginBottom: 50,
    },
    label: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        padding: 10,
        borderRadius: 50,
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#41c485',
        borderRadius: 50,
        padding: 13,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 500,
    },
    forgotPassword: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#14304A',
        fontWeight: 600
    },
    viewSocialMedia: {
        flexDirection: 'row',
        padding: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
    }
});

export default Login;
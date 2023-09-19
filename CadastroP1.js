import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CadastroP1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.tituloPrincipal}>Create Account</Text>
                <Text style={styles.subtitulo}>Fill your information below or register
                    with your social account</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    placeholder="Your name"
                    style={styles.input}
                />

                <Text style={styles.label}>Birthday:</Text>
                <TextInput
                    placeholder="dd/mm/yy"
                    style={styles.input}
                />

                <Text style={styles.label}>Adress</Text>
                <TextInput
                    placeholder="Enter Your Location"
                    style={styles.input}
                />

                <Text style={styles.label}>Phone No.</Text>
                <TextInput
                    placeholder="Preencha o nome"
                    keyboardType='phone-pad'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={() => navigation.navigate('Sign up')}>Next</Text>
                </TouchableOpacity>
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
        marginBottom: 50
    },
    label: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8
    },
    input: {
        width: 300,
        borderRadius: 50,
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
        borderRadius: 50,
        margin: 10,
    }
});
export default CadastroP1;
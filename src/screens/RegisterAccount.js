import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../components/ButtonGradient';
import { auth } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterAccount = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (text !== confirmPassword) {
            setErrorMessage('As senhas são diferentes');
        } else {
            setErrorMessage('');
        }
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        if (text !== password) {
            setErrorMessage('As senhas são diferentes');
        } else {
            setErrorMessage('');
        }
    };

    const handleRegister = async () => {
        console.log('Attempting to create user...');
        if (password !== confirmPassword ) {
            setErrorMessage('As senhas são diferentes');
            return;
        }
        if (!email || !password || !nomeCompleto || !cpf || !confirmPassword) {
            setErrorMessage('Preencha todos os campos');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Sucesso', 'Conta criada com sucesso!');
            navigation.navigate('Home');
        } catch (error) {
            console.log('Error creating user:', error);
            setErrorMessage(error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredContainer}>
                <View style={{ marginBottom: 0, marginTop: -60 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="   Nome Completo"
                        value={nomeCompleto}
                        placeholderTextColor="white"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   CPF"
                        value={cpf}
                        placeholderTextColor="white"
                        maxLength={11}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="white"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   Senha"
                        value={password}
                        onChangeText={handlePasswordChange}
                        placeholderTextColor="white"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   Confirme a Senha"
                        value={confirmPassword}
                        onChangeText={handleConfirmPasswordChange}
                        placeholderTextColor="white"
                        secureTextEntry
                    />
                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                </View>

                <View style={{ marginTop: 0 }}>

                    <GradientButton onPress={handleRegister} title="Cadastre-se" colors={['#f3f3f3', '#b6b6b6']} />

                    <View style={{ alignItems: 'center', marginTop: 18 }}>
                        <Text style={styles.registerText}>Já tem uma conta?</Text>
                        <TouchableOpacity style={styles.lastView} onPress={handleLogin}>
                            <Text style={{ color: 'black', fontSize: 17 }}>Entre</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#899A5C',
    },
    centeredContainer: {
        flex: 1,
        marginTop: 250,
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 294,
        color: 'white',
        opacity: 0.6,
        marginBottom: 40,
    },
    registerText: {
        color: 'white',
        fontSize: 17,
        marginTop: 20,
        marginBottom: 20,
    },
    lastView: {
        marginTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 10,
    },
});

export default RegisterAccount;

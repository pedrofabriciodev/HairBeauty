import React, { useEffect, useState } from 'react';

import * as LocalAuthentication from 'expo-local-authentication';

import { Text, SafeAreaView, View, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {CheckBox} from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

import GradientButton from '../components/ButtonGradient';


import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const navigation = useNavigation();
    const handleForgotPassword = () => {navigation.navigate('PasswordRecovery')}
    const handleRegisterAccount = () => {navigation.navigate('RegisterAccount')}


    const [isSelected, setSelected] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //BIOMETRIA
  async function verifyAvailableAuthentication(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible)

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types.map(type => LocalAuthentication.AuthenticationType[type]))
  }

  async function handleBiometricAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) {
        Alert.alert('Biometria não configurada', 'Por favor, configure a biometria no seu dispositivo.');
        return;
    }

    const authResult = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login com Biometria',
        fallbackLabel: 'Biometria não reconhecida'
    });

    if (authResult.success) {
        navigation.navigate('Home');
    } else {
        Alert.alert('Erro', 'A autenticação biométrica falhou.');
    }
}

  useEffect(() => {
    verifyAvailableAuthentication();
     }, []);


    const handleLoginUser = async () => {

      if (!email || !password) {
        Alert.alert('Preencha todos os campos');
        return;
    }
    try {
        await signInWithEmailAndPassword(auth, email, password);
        if(!isSelected){
          setPassword('');
        }

    } catch (error) {
        if (error.code === 'auth/invalid-credential') {
            Alert.alert('Erro', 'Usuario ou senha inválidos.');
        }

        console.log('Error login:', error);
        setErrorMessage(error.message);
      }

    //chama a biometria
    handleBiometricAuthentication();

    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
      
        <Image
          source={require('../assets/images/icone-da-tela-porem-png.png')}
          style={styles.logo}
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
          onChangeText={setPassword}
          placeholderTextColor="white"
          secureTextEntry
        />

        <View style={styles.row}>
          <View style={styles.checkBox}>
            <CheckBox
              checked={isSelected}
              checkedColor='white'
              uncheckedColor='white'
              onPress={() => setSelected(!isSelected)}
              width='15'
              height='15'
            />
          </View>
          <Text style={styles.rememberText}>Lembrar usuario</Text>

        <TouchableOpacity style={styles.row} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity>
        </View>
        
        <GradientButton activeOpacity='0.7' title='Login' colors={['#f3f3f3', '#b6b6b6']} onPress={handleLoginUser}/>

        <View style={styles.lastView}>
          <Text style={styles.registerText}>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={handleRegisterAccount}>
            <Text style={{color:'black', fontSize:17}}>Cadastre-se!</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 155,
    height: 155,
    marginBottom: 80,
    marginTop:80

  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 294,
    color: 'white',
    opacity: 0.6,
    marginBottom: 30,
    marginTop:6
    
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  checkBox:{
     marginTop:-20,
     marginLeft:-20
  },
  rememberText: {
    color: 'white',
    marginRight: 40,
    marginLeft:-15,
    fontSize: 13
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 13,
    marginLeft:20,
    marginBottom: 10
  },
  
  lastView:{
    
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  registerText: {
    color: 'white',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 20
  },
});

export default Login;

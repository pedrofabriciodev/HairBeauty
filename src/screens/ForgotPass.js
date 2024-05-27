import React, { useState } from 'react';

import { Text, SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import GradientButton from '../components/ButtonGradient'

import {auth} from '../services/firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPass = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');


  const handleLogin = () => {
    navigation.navigate('Login');
  }

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Preencha todos os campos');
      return;
  }
    try {
        await sendPasswordResetEmail(auth, email);
        Alert.alert('Um link de confirmação foi enviado para o email cadastrado!!');
    } catch (error) {
        setErrorMessage(error.message);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>

        <View style={{marginBottom:0}}>
          <View style={styles.redefinePasswordContainer}> 
            <Text style={styles.redefinePassword}>Redefinir Senha</Text>      
            <Text style={styles.email}>Informe o seu email</Text>      
          </View>

          <TextInput
            style={styles.input}
            placeholder="   Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="white"
            keyboardType="email-address"
          />
        </View>

        <View style={{marginTop:0}}>

          <GradientButton activeOpacity='0.7' title='Redefinir Senha' colors={['#f3f3f3', '#b6b6b6']} onPress={handleResetPassword}/>

          <TouchableOpacity style={styles.lastView} onPress={handleLogin}>
            <Text style={{color:'black', fontSize:17}}>Voltar para o login</Text>
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
    marginTop:250,
    
    alignItems: 'center',
  },

  redefinePasswordContainer:{
    alignItems:'center',
    justifyContent:'center',

  },

  redefinePassword:{
    fontSize:25,
    color:'white',
    fontWeight:'bold',
    marginBottom:7,
    marginTop:-2
  },

  email:{
    fontSize:18,
    color:'white',
    marginBottom:39,
    marginTop:38
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 294,
    color: 'white',
    opacity: 0.6,
    marginBottom: 100,
    
    
  },

  lastView:{
    
    marginTop:78,
    justifyContent: 'center',
    alignItems: 'center',    
  },

});

export default ForgotPass;

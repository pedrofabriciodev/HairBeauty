import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import GradientButton from '../components/ButtonGradient'

const ForgotPass = () => {
   const navigation = useNavigation();

    const handleLogin = () => {
      navigation.navigate('Login');
    }

    const handleResetPassword = () => {
    Alert.alert(
      'Redefinir Senha',
      'Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail cadastrado.',
      [{ text: 'OK', onPress: () => console.log('SENHA REDEFINIDA COM SUCESSO') }]
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>

        <View style={{marginBottom:0}}>
          <View style={styles.passwordContainer}> 
            <Text style={styles.redefinePassword}>Redefinir Senha</Text>      
            <Text style={styles.cpf}>Informe o seu cpf</Text>      
          </View>

          <TextInput
            style={styles.input}
            placeholder="   CPF"
            placeholderTextColor='white'
            maxLength={11} // Corrigido para um número
            keyboardType='numeric'
            inputMode='numeric'
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

  passwordContainer:{
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

  cpf:{
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

import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import GradientButton from '../components/ButtonGradient'

const RegisterAccount = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    






    
   const navigation = useNavigation();
   const handleLogin = () => {navigation.navigate('Login');}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>

        <View style={{marginBottom:0, marginTop:-60}}>
            <TextInput
                style={styles.input}
                placeholder="   Nome Completo"
                placeholderTextColor='white' 
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                placeholder="   CPF"
                placeholderTextColor='white'
                maxLength={11} 
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                placeholder="   Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor='white' 
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                placeholder="   Senha"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor='white'
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="   Confirme a Senha"
                placeholderTextColor='white'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

        </View>

        <View style={{marginTop:0}}>

          <GradientButton activeOpacity='0.7' title='Cadastre-se' colors={['#f3f3f3', '#b6b6b6']} />
            <View style={{alignItems:'center', marginTop:18}}>    
                <Text style={styles.registerText}>Ja tem uma conta?</Text>
                <TouchableOpacity style={styles.lastView} onPress={handleLogin}>
                    <Text style={{color:'black', fontSize:17}}>Entre</Text>
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
    marginBottom: 40,
  },

  registerText: {
    color: 'white',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 20
  },

  lastView:{
    
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',    
  },

});

export default RegisterAccount;

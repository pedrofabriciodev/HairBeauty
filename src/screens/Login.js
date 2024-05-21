import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {CheckBox} from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

import GradientButton from '../components/ButtonGradient';

const Login = () => {
    const navigation = useNavigation();
    const handleForgotPassword = () => {navigation.navigate('PasswordRecovery');}
    const [isSelected, setSelected] = useState(false)
    const goHome = () => {navigation.navigate('Home');}



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
      
        <Image
          source={require('../assets/images/icone-da-tela-porem-png.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="   CPF"
          placeholderTextColor='white'
          maxLength={11} 
          keyboardType='numeric'
          inputMode='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder="   Senha"
          placeholderTextColor='white'
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
        
        <GradientButton activeOpacity='0.7' title='Login' colors={['#f3f3f3', '#b6b6b6']} onPress={goHome}/>

        <View style={styles.lastView}>
          <Text style={styles.registerText}>Ainda não tem uma conta?</Text>
          <Text style={{color:'black', fontSize:17}}>Cadastre-se!</Text>
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

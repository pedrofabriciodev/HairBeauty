import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';
import { MaterialIcons } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const handleIconPress = () => {
    // Lógica para lidar com o pressionamento do ícone
  };



  return (
    <SafeAreaView style={styles.container}>  
      <View style={styles.centeredContainer}>

        

        <Text style={{color:'white', fontWeight:'bold', fontSize:24, textAlign:'center'}}>
         SELECIONE O SERVIÇO
        </Text>  

        <Text style={{color:'white', fontWeight:'bold', fontSize:32 }}>
         HAIR BEAUTY
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.iconContainer}> 
            <Icon onPress={handleIconPress} source={require('../assets/images/icon1.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon2.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon3.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon4.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon5.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon6.png')} />
          </View> 

          <View style={styles.iconContainer}>
            <Icon onPress={handleIconPress} source={require('../assets/images/icon7.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon8.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon9.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon10.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon11.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon12.png')} />
          </View> 

          <View style={styles.iconContainer}>
            <Icon onPress={handleIconPress} source={require('../assets/images/icon13.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon14.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon15.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon16.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon17.png')} />
            <Icon onPress={handleIconPress} source={require('../assets/images/icon18.png')} />
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
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1, // Cada visualização deve ocupar a mesma quantidade de espaço horizontal
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Margem horizontal entre as visualizações
  },
});

export default Home;

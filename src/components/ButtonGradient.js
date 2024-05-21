import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ onPress, title, colors }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
          alignItems: 'center',
          justifyContent:'center',
          borderRadius: 15,
          width:243,
          height:83,
          marginTop:52
          }}>

        <Text style={{ 
          color: 'black',
          fontSize: 25,
          fontWeight:'bold',
          textAlign: 'center',
          }}>
          
          {title}
          
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const Icon = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={source}
        style={{ width: 75, 
        height: 75,
        borderColor: '#000', 
        borderWidth:2, 
        borderRadius:15, 
        marginTop:40,
        }}
      />
    </TouchableOpacity>
  );
};

export default Icon;

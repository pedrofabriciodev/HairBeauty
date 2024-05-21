import React, { useState } from 'react';
import { TextInput, View, placeholder } from 'react-native';

const SingleLineInput = () => {
  const [text, setText ] = useState('');

  return (
    <View style={{ borderBottomWidth: 3, borderBottomColor: 'white' }}>
      <TextInput
        style={{ height: 40, width:350, padding: 0 }}
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
      />
    </View>
  );
}

export default SingleLineInput;



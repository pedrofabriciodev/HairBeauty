import React, { useState } from 'react';
import { View,Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


  const Checkboxbox = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
      <View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
    );
  }

export default Checkboxbox;
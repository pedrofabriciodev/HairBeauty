import  * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ForgotPassScreen from '../screens/ForgotPass';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import RegisterAccount from '../screens/RegisterAccount';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PasswordRecovery" component={ForgotPassScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

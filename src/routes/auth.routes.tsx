import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../pages/SignIn';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export {AuthRoutes};

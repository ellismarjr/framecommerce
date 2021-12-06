import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Cart} from '../pages/Cart';
import {Checkout} from '../pages/Checkout';
import {Home} from '../pages/Home';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Cart" component={Cart} />
    <AppStack.Screen name="Checkout" component={Checkout} />
  </AppStack.Navigator>
);

export {AppRoutes};

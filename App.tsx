import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CartProvider} from './src/hooks/useCart';

import {Routes} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

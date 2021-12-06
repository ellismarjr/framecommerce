import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './src/hooks/useAuth';
import {CartProvider} from './src/hooks/useCart';

import {Routes} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

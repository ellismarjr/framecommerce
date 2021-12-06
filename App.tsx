import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Home} from './src/pages/Home';

import {Routes} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;

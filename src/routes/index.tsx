import React from 'react';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';

const Routes = () => {
  const signed = true;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export {Routes};

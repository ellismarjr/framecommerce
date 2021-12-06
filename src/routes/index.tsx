import React from 'react';
import Loading from '../components/Loading';
import {useAuth} from '../hooks/useAuth';
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';

const Routes = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return <Loading isFlex />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export {Routes};

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import uuid from 'react-native-uuid';

interface IUser {
  email: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const ASYNC_STORAGE_KEY_USER = '@framecommerce:user';
const ASYNC_STORAGE_KEY_TOKEN = '@framecommerce:token';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData() {
      const storagedUser = await AsyncStorage.getItem(ASYNC_STORAGE_KEY_USER);
      const storagedToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEY_TOKEN);

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStoredData();
  }, []);

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    try {
      setLoading(true);
      if (email === 'frame@frame.com.br' && password === '123456') {
        const userData = {
          email,
          token: String(uuid.v4()),
        };

        await AsyncStorage.multiSet([
          [ASYNC_STORAGE_KEY_TOKEN, userData.token],
          [ASYNC_STORAGE_KEY_USER, JSON.stringify(userData)],
        ]);

        setUser(userData);
        setLoading(false);
      } else {
        setLoading(false);
        ToastAndroid.showWithGravity(
          'Ususario ou senha incorretos',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    } catch (error) {
      setLoading(false);
      ToastAndroid.showWithGravity(
        'Erro ao fazer login, verifique suas credenciais',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );

      console.error(error);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      ASYNC_STORAGE_KEY_USER,
      ASYNC_STORAGE_KEY_TOKEN,
    ]);

    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

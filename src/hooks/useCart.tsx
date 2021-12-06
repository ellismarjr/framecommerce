import React, {useCallback, useContext, useEffect} from 'react';
import {createContext, ReactNode, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../services/api';
import {formatPrice} from '../utils/formatPriceBR';

interface CartItem {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  quantity: number;
  image: string;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => Promise<void>;
}

interface CartProviderProps {
  children: ReactNode;
}

const ASYNC_STORAGE_KEY = '@framecommerce:cart';

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = async () => {
      const storagedCart = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
      } else {
        setCart([]);
      }
    };

    loadCart();
    // AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
  }, []);

  const updateProductAmount = useCallback(
    async ({productId, amount}: UpdateProductAmount) => {
      try {
        if (amount <= 0) {
          return;
        }

        const productExists = cart.find(product => product.id === productId);

        if (productExists) {
          const response = await api.get(`fruits/${productId}`);

          if (amount > response.data.quantity) {
            Alert.alert('Quantidade solicitada fora de estoque');
            return;
          }

          const amountUpdated = cart.map(product =>
            product.id === productId
              ? {
                  ...product,
                  quantity: amount,
                }
              : product,
          );

          setCart(amountUpdated);
          await AsyncStorage.setItem(
            '@framecommerce:cart',
            JSON.stringify(amountUpdated),
          );

          ToastAndroid.show(
            'Produto adicionado ao carrinho',
            ToastAndroid.SHORT,
          );
        }
      } catch (error) {
        Alert.alert('Erro ao adicionar produto');
      }
    },
    [cart],
  );

  const addToCart = useCallback(
    async (productId: number) => {
      try {
        const productExists = cart.find(product => product.id === productId);

        const fruit = await api.get(`fruits/${productId}`);
        const stockAmount = fruit.data.amount;
        const currentAmount = productExists ? productExists.quantity : 0;

        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          Alert.alert('Quantidade solicitada fora de estoque');
          return;
        }

        if (productExists) {
          updateProductAmount({productId: productExists.id, amount});
        } else {
          const response = await api.get(`fruits/${productId}`);

          const data: CartItem = {
            id: response.data.id,
            name: response.data.name,
            price: response.data.price,
            priceFormatted: formatPrice(response.data.price),
            image: response.data.image,
            quantity: 1,
          };

          setCart([...cart, data]);
          await AsyncStorage.setItem(
            '@framecommerce:cart',
            JSON.stringify([...cart, data]),
          );

          ToastAndroid.show(
            'Produto adicionado ao carrinho',
            ToastAndroid.SHORT,
          );
        }
      } catch (error) {
        Alert.alert('Erro na ao adicionar o produto');
      }
    },
    [cart, updateProductAmount],
  );

  const removeProduct = useCallback(
    async (productId: number) => {
      try {
        const productExists = cart.find(product => product.id === productId);

        if (productExists && productExists.quantity === 1) {
          const cartFiltered = cart.filter(product => product.id !== productId);
          setCart(cartFiltered);
          await AsyncStorage.setItem(
            ASYNC_STORAGE_KEY,
            JSON.stringify(cartFiltered),
          );
        }

        if (productExists && productExists.quantity > 1) {
          const amount = productExists.quantity - 1;
          updateProductAmount({productId, amount});
        }
      } catch (error) {
        Alert.alert('Erro na remoção do produto');
      }
    },
    [cart, updateProductAmount],
  );

  return (
    <CartContext.Provider value={{cart, addToCart, removeProduct}}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export {CartProvider, useCart};

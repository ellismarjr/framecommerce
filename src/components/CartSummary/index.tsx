import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useMemo} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useCart} from '../../hooks/useCart';
import {formatPrice} from '../../utils/formatPriceBR';

import {Container, ShowItemsButtom, AmountItems, Amount} from './styles';

export function CartSummary() {
  const navigation = useNavigation();
  const {cart} = useCart();

  const handleNavigateToCart = useCallback(() => {
    return navigation.navigate('Cart');
  }, [navigation]);

  const amountItems = useMemo(() => {
    const amount = cart?.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return formatPrice(amount);
  }, [cart]);

  return (
    <Container>
      <ShowItemsButtom activeOpacity={0.7} onPress={handleNavigateToCart}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <AmountItems>{cart?.length} itens</AmountItems>
      </ShowItemsButtom>

      <Amount>{amountItems}</Amount>
    </Container>
  );
}

import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Container, ShowItemsButtom, AmountItems, Amount} from './styles';

export function CartSummary() {
  const navigation = useNavigation();

  const handleNavigateToCart = useCallback(() => {
    navigation.navigate('Cart');
  }, [navigation]);

  return (
    <Container>
      <ShowItemsButtom activeOpacity={0.7} onPress={handleNavigateToCart}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <AmountItems>2 itens</AmountItems>
      </ShowItemsButtom>

      <Amount>25,98</Amount>
    </Container>
  );
}

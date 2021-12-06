import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Container, ShowItemsButtom, AmountItems, Amount} from './styles';

export function CartSummary() {
  return (
    <Container>
      <ShowItemsButtom activeOpacity={0.7}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <AmountItems>2 itens</AmountItems>
      </ShowItemsButtom>

      <Amount>25,98</Amount>
    </Container>
  );
}

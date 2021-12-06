import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useCart} from '../../hooks/useCart';

import {
  Container,
  FruitImage,
  Info,
  FruitName,
  Footer,
  FruitPrice,
  AddToCartButton,
} from './styles';

export interface IFruitItem {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  quantity: number;
  image: string;
}

interface FruitItemProps {
  data: IFruitItem;
}

export function FruitItem({data}: FruitItemProps) {
  const {addToCart} = useCart();

  return (
    <Container>
      <FruitImage resizeMode="contain" source={{uri: data.image}} />

      <Info>
        <FruitName>{data.name}</FruitName>
        <Footer>
          <FruitPrice>{data.priceFormatted}/kg</FruitPrice>
          <AddToCartButton
            activeOpacity={0.8}
            onPress={() => addToCart(data.id)}>
            <Feather name="plus" size={20} color="#c4c4c4" />
          </AddToCartButton>
        </Footer>
      </Info>
    </Container>
  );
}

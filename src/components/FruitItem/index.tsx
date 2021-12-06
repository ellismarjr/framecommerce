import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

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
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface FruitItemProps {
  data: IFruitItem;
}

export function FruitItem({data}: FruitItemProps) {
  return (
    <Container>
      <FruitImage resizeMode="contain" source={{uri: data.image}} />

      <Info>
        <FruitName>{data.name}</FruitName>
        <Footer>
          <FruitPrice>{data.price} / kg</FruitPrice>
          <AddToCartButton activeOpacity={0.8}>
            <Feather name="plus" size={20} color="#c4c4c4" />
          </AddToCartButton>
        </Footer>
      </Info>
    </Container>
  );
}

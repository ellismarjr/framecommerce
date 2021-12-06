import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductImage,
  Info,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductAmount,
  CartItemActions,
  CartItemButton,
} from './styles';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartItemProps {
  data: CartItem;
}

export function CartItem({data}: CartItemProps) {
  return (
    <Container>
      <ProductImage source={{uri: data.image}} />
      <Info>
        <ProductInfo>
          <ProductName>{data.name}</ProductName>
          <ProductPrice>{data.price}</ProductPrice>
          <ProductAmount>{data.quantity}x R$ 125,98</ProductAmount>
        </ProductInfo>
        <CartItemActions>
          <CartItemButton activeOpacity={0.7}>
            <Feather name="plus" size={20} color="#E83F5B" />
          </CartItemButton>
          <CartItemButton activeOpacity={0.7}>
            <Feather name="minus" size={20} color="#E83F5B" />
          </CartItemButton>
        </CartItemActions>
      </Info>
    </Container>
  );
}

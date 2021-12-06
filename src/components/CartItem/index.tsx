import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {useCart} from '../../hooks/useCart';

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
  price: number;
  priceFormatted: string;
  quantity: number;
  image: string;
}

interface CartItemProps {
  data: CartItem;
}

export function CartItem({data}: CartItemProps) {
  const {addToCart, removeProduct} = useCart();

  return (
    <Container>
      <ProductImage source={{uri: data.image}} />
      <Info>
        <ProductInfo>
          <ProductName>{data.name}</ProductName>
          <ProductPrice>{data.priceFormatted}</ProductPrice>
          <ProductAmount>
            {data.quantity}x {data.priceFormatted}
          </ProductAmount>
        </ProductInfo>
        <CartItemActions>
          <CartItemButton
            activeOpacity={0.7}
            onPress={() => addToCart(data.id)}>
            <Feather name="plus" size={20} color="#E83F5B" />
          </CartItemButton>
          <CartItemButton
            activeOpacity={0.7}
            onPress={() => removeProduct(data.id)}>
            <Feather name="minus" size={20} color="#E83F5B" />
          </CartItemButton>
        </CartItemActions>
      </Info>
    </Container>
  );
}

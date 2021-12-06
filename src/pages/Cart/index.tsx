import React from 'react';
import {FlatList} from 'react-native';

import {CartItem} from '../../components/CartItem';
import {CartSummary} from '../../components/CartSummary';
import {Header} from '../../components/Header';
import {useCart} from '../../hooks/useCart';

import {Container, EmptyCart, EmptyCartText} from './styles';

export function Cart() {
  const {cart} = useCart();

  return (
    <>
      <Container>
        <Header isHomePage={false} />

        {cart.length === 0 && (
          <EmptyCart>
            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
          </EmptyCart>
        )}

        <FlatList
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return <CartItem data={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      <CartSummary isCheckout />
    </>
  );
}

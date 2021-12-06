import React from 'react';
import {FlatList} from 'react-native';
import {CartItem} from '../../components/CartItem';

import {Header} from '../../components/Header';

import {Container} from './styles';

const fruits: CartItem[] = [
  {
    id: 1,
    name: 'Maçã',
    price: 'R$ 5,98',
    quantity: 1,
    image:
      'https://www.jauserve.com.br/on/demandware.static/-/Sites-jauserve-master/default/dwe1f556df/5260.png',
  },
  {
    id: 2,
    name: 'Maçã',
    price: 'R$ 5,98',
    quantity: 1,
    image:
      'https://www.jauserve.com.br/on/demandware.static/-/Sites-jauserve-master/default/dwe1f556df/5260.png',
  },
  {
    id: 3,
    name: 'Maçã',
    price: 'R$ 5,98',
    quantity: 1,
    image:
      'https://www.jauserve.com.br/on/demandware.static/-/Sites-jauserve-master/default/dwe1f556df/5260.png',
  },
];

export function Cart() {
  return (
    <Container>
      <Header isHomePage={false} />

      <FlatList
        data={fruits}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => {
          return <CartItem data={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

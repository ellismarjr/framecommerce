import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Cart} from '../../components/Cart';
import {FruitItem, IFruitItem} from '../../components/FruitItem';
import {api} from '../../services/api';
import {formatPrice} from '../../utils/formatPriceBR';

import {
  Container,
  TitleContainer,
  Title,
  TitleWrapper,
  Subtitle,
  Header,
  SearchInput,
  SearchButton,
} from './styles';

export interface Fruit extends IFruitItem {
  id: number;
}

export function Home() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    const getFruits = async () => {
      const response = await api.get('/fruits');

      const responseFormatted = response.data.map((fruit: Fruit) => {
        return {
          ...fruit,
          price: formatPrice(fruit.price),
        };
      });
      setFruits(responseFormatted);
    };

    getFruits();
  });

  return (
    <>
      <Container>
        <TitleContainer>
          <Feather name="shopping-cart" size={24} color="#E83F5B" />
          <TitleWrapper>
            <Title>Frame</Title>
            <Subtitle>Commerce</Subtitle>
          </TitleWrapper>
        </TitleContainer>

        <Header>
          <SearchInput />
          <SearchButton activeOpacity={0.8}>
            <Feather name="search" size={24} color="#FFF" />
          </SearchButton>
        </Header>

        <FlatList
          data={fruits}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <FruitItem data={item} />}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
        />
      </Container>
      <Cart />
    </>
  );
}

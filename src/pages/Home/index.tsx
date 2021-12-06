/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CartSummary} from '../../components/CartSummary';
import {FruitItem, IFruitItem} from '../../components/FruitItem';
import {useAuth} from '../../hooks/useAuth';
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
  SignOutButton,
} from './styles';

export interface Fruit extends IFruitItem {
  id: number;
}

export function Home() {
  const {signOut} = useAuth();
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [search, setSearch] = useState('');

  const getFruits = async () => {
    const response = await api.get('/fruits');

    const responseFormatted: Fruit[] = response.data.map((fruit: Fruit) => {
      return {
        ...fruit,
        priceFormatted: formatPrice(fruit.price),
      };
    });
    setFruits(responseFormatted);
  };

  useEffect(() => {
    getFruits();
  }, []);

  const handleSearchProduct = async () => {
    const fruitsFiltered = fruits.filter((fruit: Fruit) =>
      fruit.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (search && fruitsFiltered.length === 0) {
      Alert.alert('Nenhum produto encontrado');
    }

    if (search) {
      setFruits(fruitsFiltered);
    } else {
      await getFruits();
    }
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <Feather name="shopping-cart" size={24} color="#E83F5B" />
          <TitleWrapper>
            <Title>Frame</Title>
            <Subtitle>Commerce</Subtitle>
          </TitleWrapper>
          <SignOutButton activeOpacity={0.5} onPress={signOut}>
            <Feather name="log-out" size={24} color="#E83F5B" />
          </SignOutButton>
        </TitleContainer>

        <Header>
          <SearchInput onChangeText={text => setSearch(text)} />
          <SearchButton activeOpacity={0.8} onPress={handleSearchProduct}>
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
      <CartSummary />
    </>
  );
}

import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Container, Title, Header, SearchInput, SearchButton} from './styles';

export function Home() {
  return (
    <Container>
      <Title>FrameCommerce</Title>
      <Header>
        <SearchInput />
        <SearchButton>
          <Feather name="search" size={24} color="#FFF" />
        </SearchButton>
      </Header>
    </Container>
  );
}

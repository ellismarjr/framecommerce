import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {Container, BackButton, TitleWrapper, Title, Subtitle} from './styles';

interface Props {
  isHomePage?: boolean;
}

export function Header({isHomePage = true}: Props) {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      {isHomePage ? (
        <Feather name="shopping-cart" size={24} color="#E83F5B" />
      ) : (
        <BackButton activeOpacity={0.7} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#E83F5B" />
        </BackButton>
      )}

      <TitleWrapper>
        <Title>Frame</Title>
        <Subtitle>Commerce</Subtitle>
      </TitleWrapper>
    </Container>
  );
}

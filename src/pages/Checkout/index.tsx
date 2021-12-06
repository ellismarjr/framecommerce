import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import Feather from 'react-native-vector-icons/Feather';

import {Dimensions, StyleSheet} from 'react-native';

import {Container, BackButton} from './styles';

interface Params {
  file: RNHTMLtoPDF.Pdf;
}

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#e5e5e5',
  },
});

export function Checkout() {
  const navigation = useNavigation();
  const route = useRoute();
  const {file} = route.params as Params;

  const source = {uri: file.filePath, cache: true};
  return (
    <Container>
      <Pdf
        source={source}
        onError={(error: any) => {
          console.log(error);
        }}
        onPressLink={(uri: any) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />

      <BackButton activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </BackButton>
    </Container>
  );
}

import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Fruit} from '.';

export const Container = styled.View`
  flex: 1;

  padding: 30px 30px 0;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #3d3d4d;
  margin-left: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #3d3d4d;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background: #c4c4c4;
  color: #3d3d4d;

  border-radius: 5px;

  padding: 10px 10px;
  margin-right: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #3d3d4d;
  padding: 10px;
  border-radius: 5px;
`;

export const FruitsList = styled(FlatList as new () => FlatList<Fruit>).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const SignOutButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  margin-left: 10px;
`;

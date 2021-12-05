import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #3d3d4d;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background: #3d3d4d;
  opacity: 0.1;

  border-radius: 5px;

  padding: 10px 10px;
  margin-right: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #3d3d4d;
  padding: 10px;
  border-radius: 5px;
`;

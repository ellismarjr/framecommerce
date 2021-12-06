import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;

  border-radius: 5px;

  width: 146px;
  height: 211px;

  align-items: center;

  padding: 10px;
  margin-bottom: 10px;
`;

export const FruitImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const Info = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const FruitName = styled.Text`
  font-size: 16px;
  color: #3d3d4d;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const FruitPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e83f5b;
`;

export const AddToCartButton = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 5px;
`;

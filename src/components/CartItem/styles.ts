import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 114px;

  background: #fff;

  border-radius: 5px;

  flex-direction: row;
  align-items: center;

  padding: 15px;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const Info = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: #3d3d4d;
`;

export const ProductPrice = styled.Text`
  font-size: 12px;
  color: #a0a0b2;
  margin-top: 5px;
`;

export const ProductAmount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e83f5b;
  margin-top: 5px;
`;

export const CartItemActions = styled.View`
  justify-content: space-between;
  margin-left: 20px;
`;

export const CartItemButton = styled.TouchableOpacity`
  background: #fdecef;
  width: 40px;
  height: 40px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

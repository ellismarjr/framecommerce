import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #e83f5b;
  height: 56px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
`;

export const ShowItemsButtom = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 110px;

  background: #fdecef;
  border-radius: 5px;
`;

export const CheckoutButtonText = styled.Text`
  color: #e83f5b;
  font-size: 20px;
`;

export const AmountItems = styled.Text`
  margin-left: 15px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: #e5e5e5;

  padding: 60px 30px;

  justify-content: space-around;
`;

export const InfoContainer = styled.View``;

export const InfoTitle = styled.Text`
  font-weight: bold;
  color: #3d3d4d;
  font-size: 40px;
`;

export const InfoSubtitle = styled.Text`
  color: #a0a0b2;
  margin-top: 20px;
`;

export const FormContainer = styled.View``;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;

  background: #e83f5b;

  padding: 18px 16px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

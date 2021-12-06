import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

interface LoadingIndicatorProps {
  isFlex: boolean;
}

export const Container = styled.View<LoadingIndicatorProps>`
  flex: ${props => (props.isFlex ? 1 : 0)};
  background: #e5e5e5;

  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  align-items: center;
  justify-content: center;
`;

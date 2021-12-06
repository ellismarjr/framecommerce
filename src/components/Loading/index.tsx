import React from 'react';

import {Container, LoadingIndicator} from './styles';

interface LoadingProps {
  isFlex: boolean;
}

const Loading: React.FC<LoadingProps> = ({isFlex}) => {
  return (
    <Container isFlex={isFlex}>
      <LoadingIndicator size={36} color="#e83f5b" />
    </Container>
  );
};

export default Loading;

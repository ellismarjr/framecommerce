import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {Input} from '../Input';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container, Error} from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  icon: string;
}

export function InputForm({
  control,
  name,
  icon,
  error,
  ...rest
}: InputFormProps) {
  return (
    <Container>
      <FeatherIcon name={icon} size={20} color="#a0a0b2" />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input value={value} onChangeText={onChange} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

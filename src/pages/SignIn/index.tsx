import React from 'react';
import {InputForm} from '../../components/Form/InputForm';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Container,
  InfoContainer,
  InfoTitle,
  InfoSubtitle,
  FormContainer,
  SignInButton,
  SignInButtonText,
} from './styles';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAuth} from '../../hooks/useAuth';

interface CreateSessionFormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export function SignIn() {
  const {signIn} = useAuth();
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<CreateSessionFormData> = async data => {
    await signIn(data);
  };

  return (
    <Container>
      <InfoContainer>
        <InfoTitle>
          Estamos {'\n'}
          quase lá.
        </InfoTitle>
        <InfoSubtitle>
          Faça seu login para começar {'\n'}
          suas compras
        </InfoSubtitle>
      </InfoContainer>

      <FormContainer>
        <InputForm
          icon="mail"
          name="email"
          control={control}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          error={errors.amount && errors.amount.message}
        />
        <InputForm
          icon="lock"
          name="password"
          control={control}
          placeholder="Digite sua senha"
          keyboardType="default"
          secureTextEntry
          error={errors.amount && errors.amount.message}
        />

        <SignInButton activeOpacity={0.8} onPress={handleSubmit(handleSignIn)}>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
      </FormContainer>
    </Container>
  );
}

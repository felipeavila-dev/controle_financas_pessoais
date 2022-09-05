import React, { useState } from 'react';
import { Container, Form, FormTitle, Logo } from './styles';

import LogoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return  (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logotipo minha carteira" />
        <h2>Minha carteira</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input type="email" placeholder="Email: usuario@usuario.com" onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Senha: 123" onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">
          Acessar
        </Button>
      </Form>

    </Container>
  );
}

export default SignIn;
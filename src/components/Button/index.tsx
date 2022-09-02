import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButonProps> = ({children, ...rest }) => {
  return  (
    <Container {...rest} >
      { children }
    </Container>
  );
}

export default Button;
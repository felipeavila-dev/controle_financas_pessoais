import React from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';

import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return  (
    <Container>
      <Header>
        <LogoImg src={Logo} alt="Logo Minha Carteira" />
        <Title>Minha carteira</Title>
      </Header>

      <MenuContainer>
        <Link to="/">
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
        </Link>

        <Link to="/list/entry-balance">
          <MenuItemLink >
              <MdArrowUpward />
              Entradas  
          </MenuItemLink>
        </Link>

        <Link to="/list/exit-balance">
          <MenuItemLink >
              <MdArrowDownward />
              Saídas
          </MenuItemLink>
        </Link>

        <MenuItemLink onClick={ () => signOut()}>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;
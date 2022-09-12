import React, { useState, useContext } from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuMobile, ThemeToggleMobile } from './styles';

import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu, MdMenuOpen} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/themeContext';
import Toggle from '../Toggle';

const Aside: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return  (
    <Container menuIsOpen={isMenuOpen}>
      <Header>
        <MenuMobile onClick={ handleToggleMenu }>
          { isMenuOpen ? <MdClose /> : <MdMenuOpen />}
        </MenuMobile>
        <LogoImg src={Logo} alt="Logo Minha Carteira" />
        <Title>Minha carteira</Title>
      </Header>

      <MenuContainer>
        <Link to="/" onClick={ handleCloseMenu }>
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
        </Link>

        <Link to="/list/entry-balance" onClick={ handleCloseMenu }>
          <MenuItemLink >
              <MdArrowUpward />
              Entradas  
          </MenuItemLink>
        </Link>

        <Link to="/list/exit-balance" onClick={ handleCloseMenu }>
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

      <ThemeToggleMobile>
        <Toggle />
      </ThemeToggleMobile>
    </Container>
  );
}

export default Aside;
import styled from 'styled-components';

interface ContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  grid-area: aside;

  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};

  a {
    text-decoration: none;
  }

  position: relative;

  @media(max-width: 720px) {
    padding: 0 20px;
    position: fixed;
    z-index: 2;
    overflow: hidden;
    height: ${ props => props.menuIsOpen ? '100vh' : '70px' };

    border: none;
    border-bottom: ${ props => !props.menuIsOpen && `1px solid ${props.theme.colors.gray}`}
  }
`;

export const Header = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  
  @media(max-width: 720px) {
  display: none; 
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;

  
  @media(max-width: 720px) {
   display: none; 
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.div`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.info};
  text-decoration: none;

  margin: 10px 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const MenuMobile = styled.button`
  @media(min-width: 760px) {
    display: none;
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 7px;
  font-size: 24px;
  background-color: ${ props => props.theme.colors.warning };
  transition: opacity .3s;
  display: flex;
  color: ${ props => props.theme.colors.white };
  

  :hover {
    opacity: .7;
  }

`;

export const ThemeToggleMobile = styled.div`

`;

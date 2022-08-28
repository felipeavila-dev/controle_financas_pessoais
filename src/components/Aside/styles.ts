import styled from 'styled-components';

export const Container = styled.div`
  grid-area: aside;

  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};

  a {
    text-decoration: none;
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
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
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
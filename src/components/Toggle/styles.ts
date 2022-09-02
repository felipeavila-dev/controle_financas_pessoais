import styled, { ThemeContext } from 'styled-components';
import ToggleIcon, { ReactSwitchProps } from 'react-switch';


export const Container = styled.div`
  display: flex;
  align-items: center;

`;

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.white};

  @media(max-width: 720px) {
  display: none; 
  }
  
`;

export const ToggleSelector = styled(ToggleIcon).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.colors.info,
  offColor: theme.colors.warning
}))<ReactSwitchProps>`
  margin: 0 10px;
`;
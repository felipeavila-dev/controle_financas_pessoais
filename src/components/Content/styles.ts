import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  9% {
    transform: translateX(500px);
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;

  }
`;

export const Container = styled.div`
  grid-area: content;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};

  padding: 20px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  animation: ${animate} .4s;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
  }

`;
import styled, { keyframes } from "styled-components";

interface LegendProps {
  color: string;
}

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
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  border-radius: 7px;
  display: flex;

  animation: ${animate} .8s;

  
  @media(max-width: 770px) {
    width: 100%;
  }

`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  h2 {
    margin-bottom: 20px;
  }

  @media(max-width: 420px) {
    padding: 15px 10px;

    h2 {
      margin: 7px 0px;
    }
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: calc(100% - 25px);
  overflow-y: scroll;
  padding-right: 10px;


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

export const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  div {
    background-color: ${ props => props.color };
    min-width: 45px;
    min-height: 45px;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  span {
    margin-left: 10px;
  }

  @media(max-width: 420px) {
    div {
      width: 35px;
      height: 35px;
    }
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
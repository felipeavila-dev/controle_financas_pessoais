import styled, { keyframes } from "styled-components";

const animate = keyframes`
  9% {
    transform: translateX(-500px);
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

  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animate} .8s;

  header img {
    width: 35px;
    margin-left: 10px;
  }

  header p {
    font-size: 18px;
  }

  @media(max-width: 770px) {
    width: 100%;


  }
`;
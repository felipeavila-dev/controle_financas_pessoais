import styled from "styled-components";

interface ContainerProps {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${ props => props.color };
  width: 30%;
  height: 150px;
  margin: 10px 0;
  color: ${ props => props.theme.colors.white };
  border-radius: 7px;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -20px;
    opacity: .3;
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }

  small {
    font-size: 12px;
    position: absolute;

    bottom: 10px;
  }

  @media(max-width: 770px) {
    span {
      font-size: 14px;
    }

    h1 {
      word-wrap: break-word;
      font-size: 24px;

      strong {
        display: inline-block;
        width: 100%;
        font-size: 16px;
      }
    }
  }

  @media(max-width: 420px) {
    width: 100%;

    h1 {
      display: flex;

      strong {
        width: auto;
        margin-right: 5px;
      }
    }
  }
`;



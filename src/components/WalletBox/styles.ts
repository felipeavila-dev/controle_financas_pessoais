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
`;



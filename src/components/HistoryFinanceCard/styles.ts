import styled from "styled-components";

interface TagProps {
  color: string;
}

export const Container = styled.li`
  position: relative;
  background-color: ${props => props.theme.colors.tertiary};

  list-style: none;
  border-radius: 5px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  
  cursor: pointer;
  transition:all .3s;
  

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div span {
    font-size: 18px;
    font-weight: 500;
  }

  div span,
  div small {
    margin-left: 10px;
  }

  h3 {
  }

`;

export const Tag = styled.div<TagProps>`
  position: absolute;
  left: 0;

  width: 10px;
  height: 60%;

  background-color: ${props => props.color}
`;
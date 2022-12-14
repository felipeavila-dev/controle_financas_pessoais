import styled from 'styled-components';

interface TitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  h1 {
    color: ${props => props.theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.lineColor};
    }
  }

  
  @media(max-width: 420px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  
  button {
    margin: 0 5px;
  }
`;
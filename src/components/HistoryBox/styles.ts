import styled from "styled-components";

interface LegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;

  @media(max-width: 420px) {
    padding: 20px 10px;
  }
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    margin-bottom: 20px;
    margin-left: 18px;
  }

  @media(max-width: 420px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;

  @media(max-width: 420px) {
    margin-left: 20px;
  }
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

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
    margin: 0 20px 0 5px;
  }
`

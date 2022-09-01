import styled from "styled-components";

interface LegendProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  width: 48%;
  padding: 20px;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${ props => props.theme.colors.tertiary };
  color: ${ props => props.theme.colors.white };
  border-radius: 7px;
`;

export const SideLeft = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  h2 { 
    margin-bottom: 20px; 
    margin-left: 20px;
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
`;

export const SideRight = styled.div`
  flex: 1;
  height: 150px;
  align-self: center;
`;
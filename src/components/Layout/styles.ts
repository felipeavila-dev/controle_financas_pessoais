import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas: 
  'aside main-header'
  'aside content'
  ;

  height: 100vh;

  @media(max-width: 770px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    'main-header'
    'content'
    ;
  }
`;
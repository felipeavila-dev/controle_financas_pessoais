import styled, { keyframes } from "styled-components";

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

export const Container = styled.div``;

export const Content = styled.main`
  animation: ${animate} .4s;
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity .3s;
    opacity: .3;

    &:hover {
      opacity: .7;
    }
  }

  .tag-filter-recurrent::after {
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.colors.success};
    }

  .tag-filter-eventual::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }

  .active-filter {
    opacity: 1;
  }
`;
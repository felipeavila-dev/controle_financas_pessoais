import React from 'react';
import CountUp from 'react-countup';

import { Container } from './styles';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

// interface IconType {
//   icon?: 'dollar' | 'arrowUp' | 'arrowDown';
// }

interface WalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
};


const iconSelected = (icon: string) => {
  switch (icon) {
    case 'dollar':
      return dollarImg;
    case 'arrowUp':
      return arrowUpImg;
    case 'arrowDown':
      return arrowDownImg;
    default:
      return '';
  }
}

const WalletBox: React.FC<WalletBoxProps> = ({
  title, amount, footerLabel, icon, color
}) => {
  return  (
    <Container color={ color }>
      <span>{ title }</span>
      <h1>
        <CountUp
          end={ amount }
          prefix={ 'R$ ' }
          separator='.'
          decimal=','
          decimals={ 2 }
          duration={1}
        />
      </h1>
      <small>{ footerLabel }</small>
      <img src={ iconSelected(icon) } alt={ title } />

    </Container>
  );
}

export default WalletBox;
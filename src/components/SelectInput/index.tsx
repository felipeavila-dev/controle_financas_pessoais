import React from 'react';
import { Container } from './styles';

import { ChildrenProps } from '../../utils/types';

interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}


const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return  (
    <Container>
      <select>
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{ option.label }</option>
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;
import React from 'react';
import { Container } from './styles';

import { ChildrenProps } from '../../utils/types';

interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
  defaultValue?: string | number,
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}


const SelectInput: React.FC<SelectInputProps> = ({ options, onChange, defaultValue }) => {
  return  (
    <Container>
      <select onChange={ onChange } defaultValue={ defaultValue }>
        {
          options.map((option, index) => (
            index === 0 ? (
              <option key={option.value} value={option.value}>{ option.label }</option>
            ):(
              <option key={option.value} value={option.value}>{ option.label }</option>
            )
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;
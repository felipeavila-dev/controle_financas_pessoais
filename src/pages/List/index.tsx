import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe'},
    { value: 'Jeane', label: 'Jeane'},
    { value: 'Laura', label: 'Laura'},
  ];
  
  return  (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default List;
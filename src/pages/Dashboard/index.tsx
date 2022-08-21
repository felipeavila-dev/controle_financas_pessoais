import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


const Dashboard: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe'},
    { value: 'Jeane', label: 'Jeane'},
    { value: 'Laura', label: 'Laura'},
  ];

  return  (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;
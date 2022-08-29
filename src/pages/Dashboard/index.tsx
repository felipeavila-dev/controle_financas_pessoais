import React, { useEffect, useState } from 'react';

import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox'

import expenses from '../../database/expenses';
import gains from '../../database/gains';

import getYearsList from '../../utils/getYearsList';
import getMonthList from '../../utils/getMonthList';


interface YearOptions {
  value: number;
  label: number;
}

interface MonthOptions {
  value: number;
  label: string;
}

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [years, setYears] = useState<YearOptions[]>([]);
  const [months, setMonths] = useState<MonthOptions[]>([]);

  useEffect(() => {
    const yearsList = getYearsList([...expenses, ...gains]);
    setYears(yearsList);

    const monthsList = getMonthList();
    setMonths(monthsList);
  }, []);

  const options = [
    { value: 'Felipe', label: 'Felipe'},
    { value: 'Jeane', label: 'Jeane'},
    { value: 'Laura', label: 'Laura'},
  ];

  const handleMonthSelected = (month: string) => {
    const parsedMonth = Number(month);
    setMonthSelected(parsedMonth);
  }

  const handleYearSelected = (year: string) => {
    const parsedYear = Number(year);
    setYearSelected(parsedYear);
  }

  return  (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
            defaultValue={monthSelected}
            options={months}
            onChange={ (e) => handleMonthSelected(e.target.value)}
          />
          <SelectInput
            defaultValue={yearSelected}
            options={years}
            onChange={ (e) => handleYearSelected(e.target.value)}
          />
      </ContentHeader>

      <Content>
        <WalletBox
          title="Saldo"
          amount={ 150.00 }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color='#4E41F0'
        />

        <WalletBox
          title="Entradas"
          amount={ 5000.00 }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color='#F7931B'
        />

        <WalletBox
          title="Saídas"
          amount={ 2000.00 }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color='#E44C4E'
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
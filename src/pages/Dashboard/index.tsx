import React, { useEffect, useMemo, useState } from 'react';

import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox'

import expenses from '../../database/expenses';
import gains from '../../database/gains';
import { months as allMonths } from '../../utils/getMonthList';

import getYearsList from '../../utils/getYearsList';
import getMonthList from '../../utils/getMonthList';
import MessageBox from '../../components/MessageBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import neutralImg from '../../assets/neutral.svg';
import PieChartArea from '../../components/PieChartArea';
import HistoryBox from '../../components/HistoryBox';
import BarChartArea from '../../components/BarChartArea';

interface YearOptions {
  value: number;
  label: number;
}

interface MonthOptions {
  value: number;
  label: string;
}

interface PieChartOptionProps {
  name: string;
  value: number;
  percent: number;
  color: string;
}

interface HistoryData {

}

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [years, setYears] = useState<YearOptions[]>([]);
  const [months, setMonths] = useState<MonthOptions[]>([]);
  const [pieChartOptions, setPieChartOptions] = useState<PieChartOptionProps[]>([]);
  // const [historyData, setHistoryData] = useState<any>({});

  useEffect(() => {
    const yearsList = getYearsList([...expenses, ...gains]);
    setYears(yearsList);

    const monthsList = getMonthList();
    setMonths(monthsList);

    relationBetweenGainsExpenses();

  }, [monthSelected, yearSelected]);


  const handleMonthSelected = (month: string) => {
    const parsedMonth = Number(month);
    setMonthSelected(parsedMonth);
  }

  const handleYearSelected = (year: string) => {
    const parsedYear = Number(year);
    setYearSelected(parsedYear);
  }

  const totalExpenses = () => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });

    return total;
  }

  const totalGains = () => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });

    return total;
  }

  const infoMessage = () => {
    const balance = totalGains() - totalExpenses();
    if (balance < 0) {
      return {
        title: "Que pena!",
        footerLabel: "Infelizmente suas despesas superaram as receitas!",
        footerText: "Tente economizar no próximo mês",
        icon: sadImg,
      }
    } ;
    if(balance === 0) {
      return {
        title: "Ufa!",
        footerLabel: "Este mês você ficou no zero a zero",
        footerText: "Tenha cuidado. Que tal poupar algo para o próximo mês?",
        icon: neutralImg,
      }
    };

    return {
      title: "Excelente!",
      footerLabel: "Você ficou no positivo este mês",
      footerText: "Que tal investir o dinheiro acumulado?",
      icon: happyImg,
    }
  }
  
  const relationBetweenGainsExpenses = () => {
    const total = totalGains() + totalExpenses();

    const gainsPercent = (totalGains() / total) * 100;
    const expensesPercent = (totalExpenses() / total) * 100;

    const data = [
      {
        name: 'Entradas',
        value: totalGains(),
        percent: Number(gainsPercent.toFixed(1)),
        color: '#F7931B',
      },
      {
        name: 'Saídas',
        value: totalExpenses(),
        percent: Number(expensesPercent.toFixed(1)),
        color: '#E44C4E',
      }
    ];

    setPieChartOptions(data);
  }

  const historyData = useMemo(() => {
    return allMonths.map((_month, index) => {
      let amountInput = 0;
      let amountOutput = 0;
      
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if(gainMonth === index && gainYear === yearSelected ) {
          amountInput += Number(gain.amount);
        }
      });

      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if(expenseMonth === index && expenseYear === yearSelected ) {
          amountOutput += Number(expense.amount);
        }
      });

      return {
        monthNumber: index,
        month: allMonths[index].substring(0, 3),
        amountInput,
        amountOutput
      };

    }).filter((item) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);
    });
  }, [yearSelected]);

  const relationExpensesBetweenEventualAndRecurrent = useMemo(() => {
    let amountRecurrent = 0;
    let amoutEventual = 0;

    expenses.filter((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      
      return month === monthSelected && year === yearSelected;
    
    }).forEach((expense) => {
      if(expense.frequency === 'recorrente') return amountRecurrent += Number(expense.amount);

      if(expense.frequency === 'eventual') return  amoutEventual += Number(expense.amount);
    });

    const total = amountRecurrent + amoutEventual;

    console.log('Recorrente:' + amountRecurrent, amoutEventual);
    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: '#F7931B'
      },
      {
        name: 'Eventual',
        amount: amoutEventual,
        percent: Number(((amoutEventual / total) * 100).toFixed(1)),
        color: '#E44C4E'
      }
    ];
  }, [monthSelected, yearSelected]);

  const relationGainsBetweenEventualAndRecurrent = useMemo(() => {
    let amountRecurrent = 0;
    let amoutEventual = 0;

    gains.filter((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      
      return month === monthSelected && year === yearSelected;
    
    }).forEach((gain) => {
      if(gain.frequency === 'recorrente') return amountRecurrent += Number(gain.amount);

      if(gain.frequency === 'eventual') return  amoutEventual += Number(gain.amount);
    });

    const total = amountRecurrent + amoutEventual;

    console.log('Recorrente:' + amountRecurrent, amoutEventual);
    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: '#F7931B'
      },
      {
        name: 'Eventual',
        amount: amoutEventual,
        percent: Number(((amoutEventual / total) * 100).toFixed(1)),
        color: '#E44C4E'
      }
    ];
  }, [monthSelected, yearSelected]);


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
          title='Saldo'
          amount={ totalGains() - totalExpenses() }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color='#4E41F0'
        />

        <WalletBox
          title="Entradas"
          amount={ totalGains() }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color='#F7931B'
        />

        <WalletBox
          title="Saídas"
          amount={ totalExpenses() }
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color='#E44C4E'
        />

        <MessageBox
          title={ infoMessage().title }
          description={ infoMessage().footerLabel }
          footerText={ infoMessage().footerText }
          icon={ infoMessage().icon }
        />

        <PieChartArea data={ pieChartOptions }/>

        <HistoryBox
          data={historyData}
          lineColorAmountInput='#F7931B'
          lineColorAmountOutput='#E44C4E'
        />

        <BarChartArea
          title='Saídas'
          data={ relationExpensesBetweenEventualAndRecurrent }
        />

        <BarChartArea
          title='Entradas'
          data={ relationGainsBetweenEventualAndRecurrent }
        />

      </Content>
    </Container>
  );
}

export default Dashboard;
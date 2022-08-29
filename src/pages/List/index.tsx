import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import gains from '../../database/gains';
import expenses from '../../database/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import getYearsList from '../../utils/getYearsList';
import getMonthsList from '../../utils/getMonthList';

interface Data {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

interface YearOptions {
  value: number;
  label: number;
}

interface MonthOptions {
  value: number;
  label: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [years, setYears] = useState<YearOptions[]>([]);
  const [months, setMonths] = useState<MonthOptions[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual'])

  const urlType = useParams().type;

  const title = urlType === 'entry-balance' ? 'Entradas' : 'Saídas';
  const lineColor = urlType === 'entry-balance' ? '#F7931B' : '#E44C4E'
  const listData = urlType === 'entry-balance' ? gains : expenses;
    
  useEffect(() => {
    const yearsList = getYearsList(listData);
    setYears(yearsList);

    const monthYear = getMonthsList();
    setMonths(monthYear);
  }, [urlType, listData]);

  useEffect(() => {
    if (listData) {
      const filteredData = listData.filter((item) => {
        const currentDate = new Date(item.date);
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        return monthSelected === month && yearSelected === year && selectedFrequency.includes(item.frequency);
      });

      
      const list = filteredData.map((item) => {
        return {
          description: item.description,
          amountFormatted: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          dateFormatted: formatDate(item.date),
          tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
        };
      });
      setData(list);
    }
  }, [urlType, monthSelected, yearSelected, selectedFrequency]);

  const handleFrequencyClick = (frequency: string) => {
    const selectedFilter = selectedFrequency.findIndex(item => item  === frequency);
    
    if (selectedFilter >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((state) => [...state, frequency]);
    }
  }

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
      <ContentHeader title={title} lineColor={ lineColor }>
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

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'active-filter'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'active-filter'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        { data.map((currentData) => (
          <HistoryFinanceCard 
            key={ uuidv4() }
            tagColor={ currentData.tagColor }
            title={ currentData.description }
            subtitle={ currentData.dateFormatted }
            amount={ currentData.amountFormatted }
          />
        ))}
      </Content>
    </Container>
  );
}

export default List;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content, Filters } from './styles';

import gains from '../../database/gains';
import expenses from '../../database/expenses';

interface Data {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const { type } = useParams();

  const title = type === 'entry-balance' ? 'Entradas' : 'Saídas';
  const lineColor = type === 'entry-balance' ? '#F7931B' : '#E44C4E'
  const listData = type === 'entry-balance' ? gains : expenses;

  const months = [
    { value: 7, label: 'Julho'},
    { value: 8, label: 'Agosto'},
    { value: 9, label: 'Setembro'},
  ]; 
  
  const years = [
    { value: 2022, label: 2022},
    { value: 2021, label: 2021},
    { value: 2020, label: 2020},
  ];

  useEffect(() => {
    if (listData) {
      const list = listData.map((item) => {
        return {
          description: item.description,
          amountFormatted: item.amount,
          frequency: item.frequency,
          dateFormatted: item.date,
          tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
        };
      });
      setData(list);
    }
  }, [type]);
  
  return  (
    <Container>
      <ContentHeader title={title} lineColor={ lineColor }>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent "
        >
          Recorrentes
        </button>

        <button
          type="button"
          className="tag-filter tag-filter-eventual"
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
            amount={ `R$ ${currentData.amountFormatted}` }
          />
        ))}
      </Content>
    </Container>
  );
}

export default List;
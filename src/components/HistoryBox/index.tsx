import React from 'react';

import formatCurrency from '../../utils/formatCurrency';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

import { Container, ChartContainer, Header, LegendContainer, Legend } from './styles';

interface HistoryBoxProps {
  data: {
    month: string;
    amountInput: number;
    amountOutput: number;
  }[],
  lineColorAmountInput: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<HistoryBoxProps> = ({ data, lineColorAmountInput, lineColorAmountOutput }) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>
      <LegendContainer>
        <Legend color={ lineColorAmountInput }>
          <div></div>
          <span>Entradas</span>
        </Legend>
        <Legend color={ lineColorAmountOutput }>
          <div></div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </Header>

    <ChartContainer>
        <ResponsiveContainer>
          <LineChart data={ data } margin={{ top: 5, right: 20, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
            <XAxis dataKey="month" stroke="#CECECE" />
            <Tooltip formatter={ (value: string) => formatCurrency(Number(value)) }/>
            <Line
              type="monotone"
              dataKey="amountInput"
              name="Entradas"
              stroke={ lineColorAmountInput }
              strokeWidth={ 5 }
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Saídas"
              stroke={ lineColorAmountOutput }
              strokeWidth={ 5 }
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
  </Container>
);

export default HistoryBox;
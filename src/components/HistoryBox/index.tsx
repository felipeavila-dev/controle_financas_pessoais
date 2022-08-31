import React from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

import { Container } from './styles';

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
    <h2>Histórico de saldo</h2>

    <ResponsiveContainer>
      <LineChart data={ data } margin={{ top: 5, right: 20, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
        <XAxis dataKey="month" stroke="#CECECE" />
        <Tooltip />
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
  </Container>
);

export default HistoryBox;
import React from 'react';

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';

interface BarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartArea: React.FC<BarChartProps> = ({ title, data }) => {
  return  (
    <Container>
      <SideLeft>
        <h2>{ title }</h2>
        <LegendContainer>
          { data.map((item) => (
            <Legend color={ item.color } key={ item.name }>
              <div>{ item.percent | 0 }%</div>
              <span>{ item.name }</span>
          </Legend>
          ))}
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart data={ data }>
            <Bar dataKey="amount">
              { data.map((indicator) => (
                <Cell
                key={ indicator.name }
                fill={ indicator.color }
                />
                ))}
            </Bar>
            {/* <Tooltip formatter={ (value: string) => formatCurrency(Number(value)) }/> */}
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export default BarChartArea;
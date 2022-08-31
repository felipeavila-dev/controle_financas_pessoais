import React from 'react';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface PieChartOptionProps {
  name: string;
  value: number;
  percent: number;
  color: string;
}

interface PieChartProps {
  data: PieChartOptionProps[];
}

const PieChartArea: React.FC<PieChartProps> = ({ data }) => (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
        <LegendContainer>
          { data.map((pie) => (
            <Legend color={ pie.color } key={ pie.name }>
              <div>{ pie.percent }%</div>
              <span>{ pie.name }</span>
          </Legend>
          ))}
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={ data } dataKey='percent'>
              { data.map((pieValue) => (
                <Cell key={ pieValue.name } fill={ pieValue.color } />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
);

export default PieChartArea;
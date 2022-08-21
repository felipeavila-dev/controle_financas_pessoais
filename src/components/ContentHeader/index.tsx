import React from 'react';
// import SelectInput from '../SelectInput';
import { Container, TitleContainer, Controllers } from './styles';

interface ContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({title, lineColor, children}) => {

  return  (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>
        {children}
        {/* <SelectInput options={options}/> */}
      </Controllers>
    </Container>

  );
}

export default ContentHeader;
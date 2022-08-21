import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';

import { ChildrenProps } from '../../utils/types';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return  (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>
        { children }
      </Content>
    </Grid>
  );
}

export default Layout;
import { Typography } from 'antd';
import React from 'react';

import { GlobalStyle } from '../utils/globalStyled';

import PageLayout from './common/PageLayout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Typography.Title level={1}>React app</Typography.Title>
      </PageLayout>
    </>
  );
};

export default App;

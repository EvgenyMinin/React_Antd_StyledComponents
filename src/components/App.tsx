import { Typography } from 'antd';
import React from 'react';

import { GlobalStyle } from '../utils/globalStyled';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Typography.Title level={1}>React app</Typography.Title>
    </>
  );
};

export default App;

import PageLayout from 'components/common/PageLayout';
import React from 'react';
import { useParams } from 'react-router-dom';

import { IProps } from './types';

const UserDetail = () => {
  const { id } = useParams<IProps>();

  return (
    <PageLayout>
      <div>user {id}</div>
    </PageLayout>
  );
};

export default UserDetail;

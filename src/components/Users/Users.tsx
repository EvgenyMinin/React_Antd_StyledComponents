import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import { API_URL } from 'consts';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';

import { IUser } from './types';
import { columns } from './columns';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    setIsLoading(false);
  }, []);

  return (
    <PageLayout>
      <StyledTitle level={1}>Users</StyledTitle>
      {isLoading ? (
        <Spin />
      ) : (
        <StyledTable dataSource={users} columns={columns} rowKey="id" />
      )}
    </PageLayout>
  );
};

export default Users;

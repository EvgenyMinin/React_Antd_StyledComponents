import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { API_URL } from 'consts';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';

import { IUser } from './types';
import { columns } from './columns';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    setIsLoading(false);
  }, []);

  const onRowClick = ({ id, index }: any) => {
    return { onClick: () => history.push(`/users/${id}`) };
  };

  return (
    <PageLayout>
      <StyledTitle level={1}>Users</StyledTitle>
      {isLoading ? (
        <Spin />
      ) : (
        <StyledTable
          dataSource={users}
          columns={columns}
          rowKey="id"
          onRow={onRowClick}
        />
      )}
    </PageLayout>
  );
};

export default Users;

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Button, notification, Row, Space, Spin } from 'antd';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { API_URL } from 'consts';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';
import { StyledButton } from 'components/common/Button';

import CreateEditUserModal from './CreateEditUserModal';
import { IUser } from './types';
import { columns } from './columns';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const history = useHistory();

  const actionsCol = {
    title: 'Action',
    key: 'action',
    render: (record: IUser) => {
      return (
        <Space size="middle">
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              // onEdit(record.id);
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              removeData(record.id);
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      );
    },
  };

  const newColumns = [...columns, actionsCol];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    const response = await axios.get(`${API_URL}/users`);

    setUsers(response.data);
    setIsLoading(false);
  };

  const removeData = (id: string) => {
    axios.delete(`${API_URL}/users/${id}`).then(() => {
      const del = users?.filter((user) => id !== user.id);
      notification.success({
        message: 'User has been successfully deleted'
      });
      setUsers(del);
    });
  };

  const onRowClick = ({ id }: any) => {
    return { onClick: () => history.push(`/users/${id}`) };
  };

  const handleShowNewProductModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <PageLayout>
      <Row align="middle" justify="space-between">
        <StyledTitle level={1}>Users</StyledTitle>

        <StyledButton type="primary" onClick={handleShowNewProductModal}>
          Add New
        </StyledButton>
      </Row>
      {isLoading ? (
        <Spin />
      ) : (
          <StyledTable
            dataSource={users}
            columns={newColumns}
            rowKey="id"
            onRow={onRowClick}
          />
        )
      }

      {isModalVisible && (
        <CreateEditUserModal
          isModalVisible={isModalVisible}
          getData={getData}
          setIsModalVisible={setIsModalVisible}
          handleShowNewProductModal={handleShowNewProductModal}
        />
      )}
    </PageLayout>
  );
};

export default Users;

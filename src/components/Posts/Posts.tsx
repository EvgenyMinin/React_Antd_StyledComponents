import axios from 'axios';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, notification, Row, Space, Spin } from 'antd';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';
import { StyledButton } from 'components/common/Button';
import { API_URL } from 'consts';

import { columns } from './columns';
import { IPost } from './types';
import CreateEditPostModal from './CreateEditPostModal';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const actionsCol = {
    title: 'Action',
    key: 'action',
    render: (record: IPost) => {
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

    const response = await axios.get(`${API_URL}/posts`);

    setPosts(response.data);
    setIsLoading(false);
  };

  const removeData = (id: string) => {
    axios.delete(`${API_URL}/posts/${id}`).then(() => {
      const del = posts?.filter((post) => id !== post.id);
      setPosts(del);
      notification.success({
        message: 'Post has been successfully deleted'
      });
    });
  };

  const handleShowNewProductModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <PageLayout>
      <Row align="middle" justify="space-between">
        <StyledTitle level={1}>Posts</StyledTitle>

        <StyledButton type="primary" onClick={handleShowNewProductModal}>
          Add New
        </StyledButton>
      </Row>

      {isLoading ? (
        <Spin />
      ) : (
          <StyledTable dataSource={posts} columns={newColumns} rowKey="id" />
        )}

      {isModalVisible && (
        <CreateEditPostModal
          isModalVisible={isModalVisible}
          getData={getData}
          setIsModalVisible={setIsModalVisible}
          handleShowNewProductModal={handleShowNewProductModal}
        />
      )}
    </PageLayout>
  );
};

export default Posts;

import axios from 'axios';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Spin } from 'antd';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';
import { API_URL } from 'consts';

import { columns } from './columns';
import { IPost } from './types';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);

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
    });
  };

  return (
    <PageLayout>
      <StyledTitle level={1}>Posts</StyledTitle>
      {isLoading ? (
        <Spin />
      ) : (
        <StyledTable dataSource={posts} columns={newColumns} rowKey="id" />
      )}
    </PageLayout>
  );
};

export default Posts;

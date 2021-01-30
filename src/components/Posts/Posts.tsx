import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';

import { columns } from './columns';
import { IPost } from './types';
import { API_URL } from 'consts';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));

    setIsLoading(false);
  }, []);

  return (
    <PageLayout>
      <StyledTitle level={1}>Posts</StyledTitle>
      {isLoading ? (
        <Spin />
      ) : (
        <StyledTable dataSource={posts} columns={columns} rowKey="id" />
      )}
    </PageLayout>
  );
};

export default Posts;

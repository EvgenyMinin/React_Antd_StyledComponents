import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { SyntheticEvent } from 'react';

import { IPost } from './types';
import { onEdit } from './utils/onEdit';
import { onDelete } from './utils/onDelete';

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: IPost) => {
      return (
        <Space size="middle">
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              onEdit(record.id);
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              onDelete(record.id);
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      );
    },
  },
];

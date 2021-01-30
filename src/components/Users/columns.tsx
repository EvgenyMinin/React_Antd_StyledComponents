import { Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { SyntheticEvent } from 'react';

import { onEdit } from './utils/onEdit';
import { onDelete } from './utils/onDelete';
import { IUser } from './types';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: IUser) => {
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

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Row, Space, Spin } from 'antd';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import axios from 'axios';

import PageLayout from 'components/common/PageLayout';
import { StyledTitle } from 'components/common/Title';
import { StyledTable } from 'components/common/Table';
import { onEdit } from 'components/Users/utils/onEdit';
import { StyledButton } from 'components/common/Button/Button';

import { columns } from './columns';
import { IProduct } from './types';
import { LOCAL_URL } from '../../consts';
import CreateEditModal from './CreateEditModal/CreateEditModal';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const actionsCol = {
    title: 'Action',
    key: 'action',
    render: (record: IProduct) => {
      return (
        <Space size="middle">
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              onEdit(record._id);
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={(e: SyntheticEvent) => {
              e.stopPropagation();
              removeData(record._id);
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

    const response = await axios.get(`${LOCAL_URL}/products`);

    setProducts(response.data);
    setIsLoading(false);
  };

  const removeData = (id: string) => {
    axios.delete(`${LOCAL_URL}/products/${id}`).then(() => {
      const del = products?.filter((product) => id !== product._id);
      setProducts(del);
    });
  };

  const handleShowNewProductModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <PageLayout>
      <Row align="middle" justify="space-between">
        <StyledTitle level={1}>Products</StyledTitle>

        <StyledButton type="primary" onClick={handleShowNewProductModal}>
          Add New
        </StyledButton>
      </Row>

      {isLoading ? (
        <Spin />
      ) : (
        <StyledTable dataSource={products} columns={newColumns} rowKey="_id" />
      )}

      {isModalVisible && (
        <CreateEditModal
          isModalVisible={isModalVisible}
          getData={getData}
          setIsModalVisible={setIsModalVisible}
          handleShowNewProductModal={handleShowNewProductModal}
        />
      )}
    </PageLayout>
  );
};

export default Products;

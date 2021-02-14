import React from 'react';
import { Modal, notification, Form, Input, InputNumber } from 'antd';
import axios from 'axios';

import { StyledButton } from 'components/common/Button';

import { LOCAL_URL } from 'consts';
import { IProduct } from '../types';
import { IProps } from './types';

const CreateEditModal = ({
  isModalVisible,
  getData,
  setIsModalVisible,
  handleShowNewProductModal,
}: IProps) => {
  const onFinish = async (values: IProduct) => {
    try {
      await axios.post(`${LOCAL_URL}/products`, values);
      getData();
      setIsModalVisible(false);
      notification.success({
        message: 'Successfuly added',
      });
    } catch (error) {
      notification.error({ message: `😱 Axios request failed: ${error}` });
    }
  };

  return (
    <Modal
      title="Add New Product"
      centered
      visible={isModalVisible}
      onCancel={handleShowNewProductModal}
      width={400}
      footer={[
        <StyledButton form="myForm" key="submit" htmlType="submit" type='primary'>
          Submit
        </StyledButton>,
      ]}
    >
      <Form layout="vertical" name="products" onFinish={onFinish} id="myForm">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please enter price' }]}
        >
          <InputNumber min={0} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateEditModal;

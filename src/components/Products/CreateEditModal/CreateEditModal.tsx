import React from 'react';
import { Modal, notification, Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

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
      setIsModalVisible(!isModalVisible);
      notification.open({
        message: 'Successfuly added',
      });
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
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
        <Button form="myForm" key="submit" htmlType="submit">
          Submit
        </Button>,
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

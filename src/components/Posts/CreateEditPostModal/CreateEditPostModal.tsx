import React from 'react';
import { Modal, notification, Form, Input } from 'antd';
import axios from 'axios';

import { API_URL } from 'consts';
import { IPost } from '../types';
import { IProps } from './types';
import { StyledButton } from 'components/common/Button';

const CreateEditModal = ({
  isModalVisible,
  getData,
  setIsModalVisible,
  handleShowNewProductModal,
}: IProps) => {
  const onFinish = async (values: IPost) => {
    try {
      await axios.post(`${API_URL}/posts`, values);
      getData();
      setIsModalVisible(!isModalVisible);
      notification.success({
        message: 'Successfuly added',
      });
    } catch (error) {
      notification.error({ message: `😱 Axios request failed: ${error}` });
    }
  };

  return (
    <Modal
      title="Add New Post"
      centered
      visible={isModalVisible}
      onCancel={handleShowNewProductModal}
      width={400}
      footer={[
        <StyledButton type='primary' form="myForm" key="submit" htmlType="submit">
          Submit
        </StyledButton>,
      ]}
    >
      <Form layout="vertical" name="posts" onFinish={onFinish} id="myForm">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: 'Please input body' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateEditModal;

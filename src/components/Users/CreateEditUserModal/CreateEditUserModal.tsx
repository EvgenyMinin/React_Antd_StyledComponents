import React from 'react';
import { Modal, notification, Form, Input } from 'antd';
import axios from 'axios';
import { MaskedInput } from 'antd-mask-input';

import { API_URL } from 'consts';
import { IUser } from '../types';
import { IProps } from './types';
import { StyledButton } from 'components/common/Button';

const CreateEditModal = ({
  isModalVisible,
  getData,
  setIsModalVisible,
  handleShowNewProductModal,
}: IProps) => {
  const onFinish = async (values: IUser) => {
    try {
      await axios.post(`${API_URL}/users`, values);
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
      title="Add New User"
      centered
      visible={isModalVisible}
      onCancel={handleShowNewProductModal}
      width={400}
      footer={[
        <StyledButton type='primary' form="usersForm" key="submit" htmlType="submit">
          Submit
        </StyledButton>,
      ]}
    >
      <Form layout="vertical" name="users" onFinish={onFinish} id="usersForm">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name' }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input email' },
            { type: 'email', message: 'Email is not valid' }
          ]}
        >
          <Input placeholder="Enter email" type='email' />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input phone' }]}
        >
          <MaskedInput mask="111-111-111" name="expiry" placeholder="___-___-___" />
        </Form.Item>

        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: 'Please input website' }]}
        >
          <Input placeholder="Enter website" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateEditModal;

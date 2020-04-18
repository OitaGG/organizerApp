// @flow 
import React from 'react';
import './NewCard.less';
import { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

export default function NewCard({ visible, onCreate, onCancel }) {
        const [form] = Form.useForm();
        return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                console.log('Validate Failed:', info);
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                >
                <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Modal>
        );
}

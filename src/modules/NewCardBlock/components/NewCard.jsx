// @flow 
import React, {useEffect} from 'react';
import './NewCard.less';
import { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

export default function NewCard({visible, onCreate, onCancel, newList}) {
        const [form] = Form.useForm();
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        return (
        <Modal
            visible={visible}
            title="Новый шаблон задачи"
            okText="Создать"
            cancelText="Отменить"
            onCancel={onCancel}
            onOk={() => onCreate(title, description)}
        >
            <Form
                form={form}
                layout="vertical"
                name="new_item"
            >
                <Form.Item name="title" label="Название" rules={[{ required: true }]}>
                    <Input onChange={(event) => setTitle(event.target.value)}/>
                </Form.Item>
                <Form.Item name="description" label="Описание" rules={[{ required: true }]}>
                    <Input.TextArea onChange={(event) => setDescription(event.target.value)}/>
                </Form.Item>
            </Form>
          </Modal>
        );
}

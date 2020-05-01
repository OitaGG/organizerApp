// @flow 
import React, {useEffect} from 'react';
import './NewCard.less';
import { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

export default function NewCard({visible, onCreate, onCancel, setTitle, setDescription, title, description}) {
        const [form] = Form.useForm();
        return (
        <Modal id="modal"
            visible={visible}
            title="Новый шаблон задачи"
            okText="Создать"
            cancelText="Отменить"
            onCancel={onCancel}
            destroyOnClose={true}
            onOk={() => onCreate()}
        >
            <Form
                form={form}
                layout="vertical"
                name="new_item"
                initialValues={{ title: title, description: description }}
            >
                <Form.Item
                    name="title"
                    label="Название"
                    valuePropName="input.value"
                >
                    <Input
                        value={title}
                        allowClear
                        onChange={(event) => setTitle(event.target.value)}/>
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Описание"
                    valuePropName="textarea.value"
                    >
                    <Input.TextArea
                        value={description}
                        allowClear
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Item>
            </Form>
          </Modal>
        );
}

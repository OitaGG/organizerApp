import React from 'react';
import {Block, Button} from "../../../components";
import {Form, Input} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <div>
            <div className="auth_header">
                <h2>Войти в аккаунт</h2>
                <p>Для продолжения войдите в аккаунт</p>
            </div>
            <Block>
                <Form
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="username"
                        validateStatus={
                            !touched.username ? '' : errors.username ? 'error' : 'success'
                        }
                        hasFeedback
                        help={touched.username && errors.username}
                    >
                        <Input
                            id="username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Логин"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        validateStatus={
                            !touched.password ? '' : errors.password ? 'error' : 'success'
                        }
                        hasFeedback
                        help={touched.password && errors.password}
                    >
                        <Input
                            id="password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" size="large">Войти в аккаунт</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className="register-link" to="/registration">Зарегистрироваться</Link>
                    </Form.Item>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;
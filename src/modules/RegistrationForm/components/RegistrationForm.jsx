import React from 'react';
import {Block, Button} from "../../../components";
import {Form, Input} from "antd";
import { UserOutlined, LockOutlined, MailOutlined, UnlockTwoTone} from '@ant-design/icons';
import {Link} from "react-router-dom";
const success = false;


const RegistrationForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    const form = (
        <Form
            className="registration-form"
            onSubmit={handleSubmit}
        >
            <Form.Item
                name="email"
                validateStatus={
                    !touched.email ? '' : errors.email ? 'error' : 'success'
                }
                hasFeedback
                help={touched.email && errors.email}
            >
                <Input
                    prefix={<MailOutlined/>}
                    id="email"
                    placeholder="Введите E-mail"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
            </Form.Item>
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
                    placeholder="Придумайте логин"
                    type="text"
                    value={values.email}
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
                    placeholder="Придумайте пароль"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
            </Form.Item>
            <Form.Item
                name="repeatPassword"
                validateStatus={
                    !touched.repeatPassword ? '' : errors.repeatPassword ? 'error' : 'success'
                }
                hasFeedback
                help={touched.repeatPassword && errors.repeatPassword}
            >
                <Input
                    id="repeatPassword"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Повторите пароль"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" size="large">Зарегистрироваться</Button>
            </Form.Item>
            <Form.Item>
                <Link className="register-link" to="/login">Войти в существующий аккаунт</Link>
            </Form.Item>
        </Form>);
    const successForm = (
        <div className="auth_success">
            <UnlockTwoTone style={{ fontSize: '50px', color: '#0984e3' }}/>
            <h3>Подтверждение аккаунта</h3>
            <p>Для завершения регистрации перейдите по ссылке в письме, которое мы вам отправили</p>
            <Link className="register-link" to="/login">Войти в существующий аккаунт</Link>
        </div>
    );
    return (
        <div>
            <div className="auth_header">
                <h2>Регистрация</h2>
                <p>Для продолжения зарегистрируйтесь</p>
            </div>
            <Block>
                {!success ? form : successForm}
            </Block>
        </div>
    )
};

export default RegistrationForm;
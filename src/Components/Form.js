import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import '../Styles/Form.css'

export default class LogIn extends Component {
    render() {

        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
        return (
            
            <Form
                name="normal_login"
                className="login-form form-signin"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item>
                    <div className="form__top-row">
                        <span>Sign In</span>
                        <Button type="link" size="small" className="form__top-row__signup">Sign Up</Button>
                    </div>
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="e-mail address..." />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password..."
                />
                </Form.Item>
         
         
                <Form.Item>
                    <div className="form__bottom-row" >
                        <a className="login-form-forgot" href=" ">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        )
    }
}

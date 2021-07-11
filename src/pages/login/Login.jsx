import { LockOutlined, MailOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import logo from '../../images/facebook-logo.png';
import './login.scss';

class Login extends Component {

  onFinish = (data) => {
    console.log('Success:', data);
  };

  render() {
    return (
      <div className="login-facebook container">
        <div className="login-facebook__header">
          <div>
            <img src={logo} alt="facebook" />
            <h3>Đăng nhập gần đây</h3>
            <p>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
          </div>
          <Card title="Thêm tài khoản">
            <PlusOutlined />
          </Card>
        </div>
        <div className="login-facebook__form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={(data) => this.onFinish(data)}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập lại Email hoặc Số điện thoại!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email hoặc số điện thoại" autoComplete="off" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập lại Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Đăng nhập
              </Button>
              <p style={{ color: '#1877f2' }}>Quên mật khẩu?</p>
            </Form.Item>
            <hr />

            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Tạo tài khoản mới
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';
import React, { Component } from 'react';
import logo from '../../images/facebook-logo.png';
import './register.scss';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

let dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

class Register extends Component {

  onFinish = (data) => {
    console.log('Received values of form: ', data);
  };

  render() {
    return (
      <div className="container register-facebook">
        <div className="register-facebook__header">
          <img src={logo} alt="register" />
          <h4>Đăng ký nhanh tài khoản</h4>
        </div>
        <div className="register-facebook__form">
          <Form
            {...formItemLayout}
            name="register"
            onFinish={(data) => this.onFinish(data)}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="nickname"
              label="Họ và tên"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập họ và tên !',
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Họ và tên ..." />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'Vui lòng nhập E-mail!',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập lại E-mail!',
                },
              ]}
            >
              <Input placeholder="Nhập Email ..." />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              minLength={6}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password minLength={6} placeholder="Nhập Password ..." />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập lại password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('Mật khẩu không đúng !'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại Password ..." />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              max={9}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại !',
                },
              ]}
            >
              <Input
                placeholder="Nhập số điện thoại ..."
                maxLength={10}
                minLength={9}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>

            <Form.Item
              name="date"
              label="Ngày/Tháng/Năm sinh"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập ngày sinh',
                },
              ]}
            >
              <DatePicker format={dateFormatList} />
            </Form.Item>

            <Form.Item
              className="ant-gender"
              name="gender"
              label="Giới tính"
              rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
            >
              <Select placeholder="Chọn giới tính" style={{ width: 150 }}
              >
                <Option value="Nam">Nam</Option>
                <Option value="Nữ">Nữ</Option>
                <Option value="Khác">Khác</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="register">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Đăng Ký
              </Button>
              <h4>Bạn đã có tài khoản? <a href="login">Đăng nhập</a></h4>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
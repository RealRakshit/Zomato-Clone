import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./Signuppp.css";
import { useNavigate } from 'react-router-dom';

function Signuppp () {
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const navigate=useNavigate();
  
  function handleBack() {
    navigate('/addrestaurant');
  };

  return(

  <Form id="signupform"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 1000,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item 
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item 
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox className='b'>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 11,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn'>
        Submit
      </Button>
      <Button type="primary"  className='btn' onClick={handleBack}>
        Go back !
      </Button>
    </Form.Item>
    
  </Form>
  )
};
export default Signuppp;
import React from 'react';
import { Form, Input, Button } from 'antd-mobile';
import './styles.less';
import { connect } from 'dva';
import { history } from 'umi';
export default connect((state) => {
  return {};
})(Qfrom);
function Qfrom(props) {
  const { dispatch } = props;
  const [form] = Form.useForm();

  //注册
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    console.log(values);
    if (values.username && values.password == values.againpwd) {
      await dispatch({
        type: 'reg/fetchReg',
        payload: values,
      });
      await dispatch({
        type: 'index/fetchLogin',
        payload: values,
      });
      history.push('/');
    }
  };
  //   判断二次密码是否正确
  const validatePsw = ({ getFieldValue }) => {
    return {
      validator: (_, value) => {
        console.log(value);
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('两次输入密码不一致'));
      },
    };
  };
  return (
    <Form
      layout="horizontal"
      form={form}
      styleName="form_box"
      footer={
        <>
          <Button
            styleName="btn"
            block
            type="submit"
            color="rgb(27, 169, 186)"
            size="large"
            onClick={onSubmit}
          >
            注册
          </Button>
        </>
      }
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '用户名不能为空' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          { required: true, message: '请输入密码' },
          { type: 'string', min: 8, max: 30 },
        ]}
      >
        <Input
          type="password"
          placeholder="请输入8-30位字符作为新密码"
          clearable
        />
      </Form.Item>
      <Form.Item
        name="againpwd"
        label="确认密码"
        dependencies={['password']}
        validateTrigger="onChange"
        rules={[validatePsw, { required: true, message: '请输入密码' }]}
      >
        <Input type="password" placeholder="请再次输入密码" clearable />
      </Form.Item>
    </Form>
  );
}

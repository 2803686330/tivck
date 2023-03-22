import React from 'react';
import { Form, Input } from 'antd-mobile';
function Reg(props) {
  return (
    <div>
      <Form>
        <Form.Item label="姓名">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="邮箱地址">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="所在城市">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Reg;

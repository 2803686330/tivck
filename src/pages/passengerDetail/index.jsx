import React from 'react';
import { QIcon, QHead, QButton } from '@/components';
import { Form, Input } from 'antd-mobile';
import './styles.less';
function PassengerDetail(props) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_fyuc8am7i5g.js'; //icon图标链接
  // 返回上一级
  const onIcon = () => {
    window.history.back(-1);
  };
  return (
    <div styleName="passdetail_box">
      <div styleName="passdetail_head">
        <QHead
          title={'订单填写'}
          color={'#fff'}
          fontSize={'6.347826vw'}
          background={'#1ba9ba'}
          backArrow={
            <QIcon
              scriptUrl={scriptUrl}
              type={'icon-arrow-left'}
              fontSize={'5.415459vw'}
              color={'#fff'}
            />
          }
        />
      </div>
      <div styleName="passdetail_middle">
        <div styleName="passdetail_info">
          <img
            src="http://10.161.54.4:3000/src/pages/user/components/avatar/avatar.svg"
            alt=""
          />
          <div>{userInfo ? userInfo.username : null}</div>
        </div>
        <div styleName="passdetail_add">
          <div>
            <QIcon type="icon-zhaoxiangji-copy" fontSize="23px" />
          </div>
          <QButton
            title="扫描证件添加" //设置按钮文字
            height="50px" //设置按钮高度
            margin="20px 10px" //设置按钮外边距
            color="#91D6FF" //设置按钮颜色
            block //设置按钮是否为块元素
          />
        </div>
        <Form
          layout="horizontal"
          footer={
            <QButton
              styleName="button"
              type="submit"
              title="提交" //设置按钮文字
              color="#fff" //设置按钮文字颜色
              margin="0 10px" //设置按钮外边距
              height="45px" //设置按钮高度
              background="#1BA9BA" //设置按钮背景颜色
            />
          }
        >
          <Form.Item
            name="name"
            label="乘客类型"
            rules={[{ required: true, message: '请选择乘客类型!' }]}
          >
            <Input placeholder="请选择乘客类型" />
          </Form.Item>
          <Form.Item
            name="name"
            label="姓名"
            help="详情地址"
            rules={[{ required: true, message: '请选输入乘客姓名!' }]}
          >
            <Input placeholder="与乘客证件姓名一致" showCount />
          </Form.Item>
          <Form.Item
            name="name"
            label="证件类型"
            rules={[{ required: true, message: '请选择证件类型!' }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="name"
            label="证件号码"
            rules={[{ required: true, message: '请输入证件号码!' }]}
          >
            <Input placeholder="与乘客证件姓名一致" />
          </Form.Item>
          <Form.Item
            name="name"
            label="手机号码"
            rules={[{ required: true, message: '请输入手机号码!' }]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item>
            <div styleName="div_foot">
              <div>
                为配合疫情防控工作，需提供每名乘客的
                <span style={{ color: 'red' }}>本人手机号</span>，老人
              </div>
              <div>或无手机号的乘客，可填写亲友手机号</div>
            </div>
          </Form.Item>
        </Form>
        <div styleName="bapw">本次购票服务由八维票务提供</div>
      </div>
    </div>
  );
}

export default PassengerDetail;

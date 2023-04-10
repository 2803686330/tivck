import React, { useEffect } from 'react';
import { QIcon, QHead, QButton } from '@/components';
import { Form, Input, Toast } from 'antd-mobile';
import { history } from 'umi';
import './styles.less';
import { connect } from 'dva';

export default connect(({ passengerDetail }) => {
  return { passengerLists: passengerDetail.passengerLists };
})(PassengerDetail);
function PassengerDetail(props) {
  const { dispatch, passengerLists } = props;

  const [form] = Form.useForm();
  const { bookerId } = props.location.query;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_4pauw013d3w.js'; //icon图标链接

  const passengerDetailList = async () => {
    await dispatch({
      type: 'passengerDetail/fetchOrderInfo',
      payload: {
        bookerId,
      },
    });
  };
  useEffect(() => {
    if (bookerId) {
      passengerDetailList();
      form.setFieldsValue(passengerLists);
    }
  }, []);

  const onFinish = (values) => {
    if (values) {
      Toast.show({
        //提示
        icon: 'success',
        content: '保存成功',
        duration: 1000,
      });
      setTimeout(() => {
        history.push('/passengers');
      }, 1000);
    }
  };
  return (
    <div styleName="passdetail_box">
      <div styleName="passdetail_head">
        <QHead
          title={'乘客列表'}
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
          <QIcon //icon引入
            scriptUrl={scriptUrl}
            type={'icon-avatar'}
            fontSize={'8.415459vw'}
            color={'#fff'}
          />
          <div>{userInfo ? userInfo.username : null}</div>
        </div>
        <div styleName="passdetail_add">
          <div>
            <QIcon type="icon-zhaoxiangji" fontSize="20px" />
          </div>
          <QButton
            title="扫描证件添加"
            height="50px"
            margin="20px 10px"
            color="#1ba9ba"
            block
            fontSize="14px"
          />
        </div>
        <Form
          form={form}
          layout="horizontal"
          onFinish={onFinish}
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
            name="ticketType"
            label="乘客类型"
            rules={[{ required: true, message: '请选择乘客类型!' }]}
          >
            <Input placeholder="请选择乘客类型" />
          </Form.Item>
          <Form.Item
            name="booker"
            label="姓名"
            help="详情地址"
            rules={[{ required: true, message: '请选输入乘客姓名!' }]}
          >
            <Input placeholder="与乘客证件姓名一致" showCount />
          </Form.Item>
          <Form.Item
            name="cardType"
            label="证件类型"
            rules={[{ required: true, message: '请选择证件类型!' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            name="idCard"
            label="证件号码"
            rules={[{ required: true, message: '请输入证件号码!' }]}
          >
            <Input placeholder="与乘客证件姓名一致" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
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

import React from 'react';
import { QIcon, QHead, QButton } from '@@@';
import { history } from 'umi';
import './styles.less';
function OrderDetail(props) {
  const { id } = props.location.query;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_gqyycnq78p6.js'; //icon图标链接

  const idCard = '410323199802302122';
  //   重新订购 跳转首页
  const onButton = () => history.push('/');
  const standard = () => {
    const w = window.open('_black')
    let url='https://excashier.alipaydev.com/home/error.htm?webBundle=standard&errorCode=FISHING_RISK'
    w.location.href= url 
    setTimeout(()=>{
      history.push('/orderFinish')
    },3000)
  };
  return (
    <div styleName="orderdetail">
      <div styleName="orderdetail_head">
      <QHead
        title={'订单详情'}
        color={'#fff'}
        // styleName="head"
        fontSize={'8.347826vw'}
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
      <div styleName="orderdetail_middle">
        <div styleName="middle_up">
          <dl>
            <dt>
              <QIcon type="icon-chenggong" fontSize="30px" />
            </dt>
            <dd>
              <div>出票成功</div>
              <div>请您持购票证件在车站或代售点取票后按时乘车</div>
            </dd>
          </dl>
        </div>
        <div styleName="middle_center">
          <div styleName="center_qp">取票口:123123123</div>
          <div styleName="center_time">
            <div styleName="center_left">
              <div>03月15日周五</div>
              <div>07:00</div>
              <div>
                北京南 <QIcon type="icon-dizhi" />
              </div>
            </div>
            <div styleName="center_middle">
              <div>
                —<span>经停信息</span>—
              </div>
              <div>G157</div>
            </div>
            <div styleName="center_right">
              <div>03月15日周五</div>
              <div>11:29</div>
              <div>
              <span>上海虹桥 </span> 
              </div>
            </div>
          </div>
          <div styleName="center_info">
            <div>
              <div>张一诺</div>
              <div>一等座￥200</div>
            </div>
            <div>
              <div>
                {idCard.replace(/(\d{6})\d*([0-9a-zA-Z]{4})/, '$1******$2')}
              </div>
              <div>
                <span>靠窗</span>
                <span>02车厢16A</span>
              </div>
            </div>
            <div>待支付</div>
          </div>
        </div>
        <div styleName="middle_order">
          <div>
            <span>订单号</span>
            <span>76574574456465465</span>
          </div>
          <div>
            <span>通知手机</span>
            <span>15738759163</span>
          </div>
        </div>
        <div styleName="middle_statistics">
          <div>
            <span>成人票</span>
            <span>￥200x2张</span>
          </div>
          <div>
            <span>订单统计</span>
            <span>￥400</span>
          </div>
        </div>
        {id === undefined ? <div styleName="button">
            <QButton
              width="90%" //设置按钮宽度
              height="45px" //设置按钮高度
              title="去支付" //设置按钮文字
              color="#fff" //设置按钮颜色
              background="#FF8300" //设置按钮背景颜色
              borderRadius="20px" //设置按钮圆角
              margin="0 20px" //设置外边距
              onClick={standard} //点击事件
            />
          </div> : (
          <div styleName="button">
            <QButton
              width="90%" //设置按钮宽度
              height="45px" //设置按钮高度
              title="重新订购" //设置按钮文字
              color="#fff" //设置按钮颜色
              background="#FF8300" //设置按钮背景颜色
              borderRadius="20px" //设置按钮圆角
              margin="0 20px" //设置外边距
              onClick={onButton} //点击事件
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;

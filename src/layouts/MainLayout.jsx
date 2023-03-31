import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { QIcon } from '@@@'; //引入icon
import { history } from 'umi';
import './styles.less';

function MainLayout(props) {
  const { pathname } = props.location;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_1rhcgjkjgzb.js';
  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: (active) =>
        active ? (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-home-active'}
            fontSize={'40px'}
          />
        ) : (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-home'}
            fontSize={'40px'}
          />
        ),
    },
    {
      key: '/orderList',
      title: '订单',
      icon: (active) =>
        active ? (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-order-active'}
            fontSize={'40px'}
          />
        ) : (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-a-icon-order1'}
            fontSize={'40px'}
          />
        ),
    },
    {
      key: '/services',
      title: '客服',
      icon: (active) =>
        active ? (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-service-active'}
            fontSize={'40px'}
          />
        ) : (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-service'}
            fontSize={'40px'}
          />
        ),
    },
    {
      key: '/users',
      title: '我的',
      icon: (active) =>
        active ? (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-mine-active'}
            fontSize={'40px'}
          />
        ) : (
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-icon-mine'}
            fontSize={'40px'}
          />
        ),
    },
  ];
  const [activeKey, setActiveKey] = useState(pathname);
  const setRouteActive = (value) => {
    setActiveKey(value);
    history.push(value);
  };
  return (
    <div styleName="app">
      <section style={{ height: '100%', overflow: 'scroll' }}>
        {props.children}
      </section>
      <footer>
        <TabBar activeKey={activeKey} onChange={setRouteActive}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </footer>
    </div>
  );
}

export default MainLayout;

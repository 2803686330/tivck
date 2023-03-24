import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { QIcon } from '@@@';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import './styles.less';

function MainLayout(props) {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '待办',
      icon: (active) => (active ? <QIcon /> : <MessageOutline />),

      badge: '5',
    },
    {
      key: 'message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  const [activeKey, setActiveKey] = useState('todo');
  return (
    <div styleName="app">
      <section>{props.children}</section>
      <footer>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </footer>
    </div>
  );
}

export default MainLayout;

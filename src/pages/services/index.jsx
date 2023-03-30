import React from 'react';
import { QHead } from '@@@';
import { QIcon } from '@@@';
import './styles.less';

function Services() {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_xtznr64brd.js'; //icon图标链接
  return (
    <div>
      <QHead
        title={'在线客服'}
        background={'white'}
        color={'black'}
        backArrow={
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-arrow-left'}
            fontSize={'5.415459vw'}
            color={'#000'}
          />
        }
      />
    </div>
  );
}

export default Services;

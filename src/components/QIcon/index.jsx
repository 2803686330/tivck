import React from 'react';
import cs from 'classnames';
import { createFromIconfontCN } from '@ant-design/icons';
import './styles.less';

export default function QIcon(props) {
  const {
    color = '#000',
    fontSize = '14px',
    type = 'icon-company',
    style = {},
    className = '',
    scriptUrl = '//at.alicdn.com/t/c/font_3885987_j8xrntk3iq.js',
    ...item
  } = props;
  const IconFont = createFromIconfontCN({
    scriptUrl,
  });

  return (
    <div className={cs('componets-qbox', { [className]: className })}>
      <IconFont style={{ ...style, color, fontSize }} type={type} {...item} />
    </div>
  );
}

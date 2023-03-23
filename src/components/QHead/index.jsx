import React from 'react';
import { NavBar, Toast } from 'antd-mobile';
import cs from 'classnames';
import { history } from 'dva';
import './styles.less';
function QHead(props) {
  const {
    background = 'rgb(27, 169, 186)',
    color = 'white',
    style = {},
    className = '',
    title = '',
    ...item
  } = props;

  const back = () => {
    window.history.back(-1);
  };
  return (
    <div className={cs('top', { [className]: className })}>
      <NavBar onBack={back} style={{ ...style, background, color }} {...item}>
        {title}
      </NavBar>
    </div>
  );
}

export default QHead;

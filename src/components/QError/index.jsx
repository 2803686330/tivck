import React from 'react';
import cs from 'classnames';
import { ErrorBlock } from 'antd-mobile';
import "./styles.less"
function QError(props) {
  const {
    fullPage = false, //是否为整页异常
    title = '', //标题
    image='http://10.161.54.42:3000/src/imgs/not_login.png',//图片
    description = '', //描述
    className = '', //添加css类名
    style = {}, //设置行内样式
    ...item
  } = props;
  return (
    <ErrorBlock
      className={cs('errorblock',{ [className]: className })}
      style={{ ...style }}
      title={title}
      image={image}
      description={description}
      fullPage={fullPage}
      {...item}
    />
  );
}

export default QError;

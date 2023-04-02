import React from 'react';
import { Button } from 'antd-mobile';
import cs from 'classnames';
import './styles.less';
function QButton(props) {
  const {
    className = '', //添加类名
    style = {}, //添加行内样式
    width = '', //设置宽
    height = '', //设置高
    title = '', //设置按钮文字
    type = '', //按钮的类型
    color = '', //设置按钮文字颜色
    size = '', //设置按钮大小
    margin = '', //设置外边距
    background = '', //设置背景颜色
    fontSize = '', //设置文字的大小
    borderRadius = '', //设置按钮圆角
    onClick = () => {}, //按钮点击事件
    ...item
  } = props;
  const onButton = () => {
    onClick();
  };
  return (
    <Button
      className={cs({ [className]: className })}
      style={{
        ...style,
        width,
        height,
        color,
        fontSize,
        background,
        borderRadius,
        margin,
      }}
      type={type}
      size={size}
      onClick={onButton}
      {...item}
    >
      {title}
    </Button>
  );
}

export default QButton;

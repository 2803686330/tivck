import React from 'react';
import { Image } from 'antd-mobile';
function QImage(props) {
  const {
    style = {}, //设置行内样式
    src = '', //图片路径
    width = '', //设置图片宽度
    height = '', //设置图片高度
    lazy = false, //是否使用懒加载
    fit = '', //图片填充模式
    margin = '', //设置外边距
    borderRadius = '', //设置图片圆角
    onClick = () => {}, //设置点击事件
    ...item
  } = props;

  const onImage = () => {
    onClick();
  };

  return (
    <Image
      src={src}
      width={width}
      height={height}
      fit={fit}
      style={{ ...style, borderRadius, margin }}
      onClick={onImage}
      {...item}
      alt=""
    />
  );
}

export default QImage;

import React, { useState, useEffect } from 'react';
import { Calendar } from 'antd-mobile';
import cs from 'classnames';
import moment from 'moment';
import './styles.less';
function Qcalender(props) {
  const { className = '', style = {}, setIshow, ishow, setTime } = props;
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  const onChange = (val) => {
    // 转换时间
    const value = [moment(val).format('YYYY-MM-DD'), weeks[moment(val).day()]];
    setTime(value); //将时间传父组件
    setIshow(!ishow); //关闭时间框
  };

  return (
    <Calendar
      className={cs('aaa', { [className]: className })}
      style={{ ...style }}
      prevMonthButton={<span>上一月</span>}
      nextMonthButton={<span>下一月</span>}
      prevYearButton={React.ReactNode}
      nextYearButton={React.ReactNode}
      selectionMode="single"
      onChange={onChange}
    />
  );
}

export default Qcalender;

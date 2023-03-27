import React from 'react';
import { Calendar } from 'antd-mobile';
import cs from 'classnames';
import './styles.less';
function Qcalender(props) {
  const { className = '', style = {}, setIshow, ishow } = props;

  return (
    <Calendar
      className={cs('aaa', { [className]: className })}
      style={{ ...style }}
      prevMonthButton={<span>上一月</span>}
      nextMonthButton={<span>下一月</span>}
      prevYearButton={React.ReactNode}
      nextYearButton={React.ReactNode}
      selectionMode="single"
      onChange={(val) => {
        console.log(val);
        setIshow(!ishow);
      }}
    />
  );
}

export default Qcalender;

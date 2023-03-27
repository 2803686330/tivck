import React, { useState, useEffect } from 'react';
import { Calendar } from 'antd-mobile';
import cs from 'classnames';
import './styles.less';
function Qcalender(props) {
  const { className = '', style = {}, setIshow, ishow } = props;
  const [title, setTitle] = useState();
  const [time, setTime] = useState(new Date());
  const [r, setR] = useState();
  const onChange = (val) => {
    setIshow(!ishow);
    const time = val;
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const data = time.getDate();
    const week = time.getDay();
    const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    setTitle(`${year}-${month}-${data}`);
    setR(`${weeks[week]}`);
  };

  function getNowFormatDate() {
    let date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      strDate = date.getDate();
    if (month < 10) month = `0${month}`;
    if (strDate < 10) strDate = `0${strDate}`;
    return `${year}-${month}-${strDate}`;
  }

  useEffect(() => {
    const year = time.getFullYear(); //年
    const month = time.getMonth() + 1; //月
    const data = time.getDate(); //日
    const week = time.getDay(); //星期
    const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    setTitle(`${year}-${month}-${data}`);
    setR(`${weeks[week]}(今天)`);
  }, []);

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

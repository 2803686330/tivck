import React, { createRef, useEffect, useRef, useState } from 'react';

// useRef()  createRef()  区别
// 特性：useRef() 页面渲染的时候只执行一次
// 特性：useRef() 只有current读写
// createRef  只要组件重新渲染  createRef会重新执行
export default function index() {
  const [x1, setX1] = useState(1);
  //   const [x2, setX2] = useState(() => {
  //     return 2
  //   })

  // 作用1:获取Dom
  // 返回值 {current: xxx}
  // 作用2  存储上一次的值
  const ref = useRef();
  const ref2 = createRef();
  useEffect(() => {
    console.log(ref); //  {current: xxx}
    console.log(ref2); //  {current: xxx}
  }, []);

  console.log(ref.current, 'ref.current');
  const onClick = () => {
    ref.current = x1;
    setX1(x1 + 1);
  };
  return (
    <div>
      <h1>{x1}</h1>
      <button onClick={onClick}>改变x1</button>
      <h1 ref={ref}>useRef</h1>
      <h1 ref={ref2}>createRef</h1>
    </div>
  );
}

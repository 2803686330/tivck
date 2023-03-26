import React from 'react';
import { Image, Swiper, Toast } from 'antd-mobile';
import { list } from './data'; //数据

function Qswiper() {
  const items = list.map((dt, index) => (
    <Swiper.Item key={index}>
      <div
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        <Image src={dt} />
      </div>
    </Swiper.Item>
  ));
  return (
    <Swiper autoplay loop>
      {items}
    </Swiper>
  );
}

export default Qswiper;

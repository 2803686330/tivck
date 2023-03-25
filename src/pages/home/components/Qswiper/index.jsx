import React, { useRef } from 'react';
import { Image, Swiper, Toast } from 'antd-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { list } from './data';

function Qswiper() {
  const items = list.map((dt, index) => (
    <Swiper.Item key={index} loop={true}>
      <div
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        <Image src={dt} />
      </div>
    </Swiper.Item>
  ));
  return <Swiper autoplay>{items}</Swiper>;
}

export default Qswiper;

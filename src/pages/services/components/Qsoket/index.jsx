import React, { useState, useRef, useMemo } from 'react';
import { Input, ImageUploader } from 'antd-mobile';
import { QIcon, QButton, QImage } from '@/components';
import { expression } from '../data';
import io from 'socket.io-client';
import moment from 'moment';
import shortid from 'shortid';

import './styles.less';
function Qsoket(props) {
  const { list, setList, xy } = props;
  const ref = useRef();
  const time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss'); //发送的当前时间
  const times = moment(new Date()).valueOf(); //当前时间的时间戳
  // 控制表情显示隐藏
  const [show, setShow] = useState(false);
  const [fileList, setFileList] = useState([]);
  const socket = useMemo(() => io('http://10.161.54.42:3000'), []);
  // 点击笑脸显示隐藏底部表情
  const onExpression = () => setShow(!show);
  // 点击发送输入框的数据
  const onSend = () => {
    const title = ref.current.nativeElement.value; //获取到输入框的value值
    socket.emit('sendMsg', {
      Content: title,
      CreateDateUtc: time,
      timeStmp: times,
    });
    setList([
      ...list,
      {
        id: shortid.generate(), //唯一id
        title, //发送文字
        image: '', //发送的图片
        images: '', //上传图片
        direction: xy, //展示的位置
      },
    ]);
    ref.current.clear(); //点击发送后清空输入框
  };
  // 点击表情发送表情
  const onImage = (value) => {
    const { id, image } = value;
    socket.emit('sendMsg', {
      Content: id,
      CreateDateUtc: time,
      timeStmp: times,
    });
    setList([
      ...list,
      {
        id: shortid.generate(), //唯一id
        title: '', //发送文字
        image, //发送的图片
        images: '', //上传图片
        direction: xy, //展示的位置
      },
    ]);
  };

  // 点击图片发送图片
  const onUpload = (file) => {
    const { name } = file;
    socket.emit('sendMsg', {
      Content: name,
      CreateDateUtc: time,
      timeStmp: times,
    });
    setList([
      ...list,
      {
        id: shortid.generate(), //唯一id
        title: '', //发送的文字
        image: '', //发送的表情
        images: name, //上传的图片
        direction: xy, //展示的位置
      },
    ]);
  };

  return (
    <div styleName="service_box">
      <div styleName="service_foot">
        <div>
          <Input styleName="input" clearable ref={ref} />
        </div>
        <ImageUploader
          accept="image/png"
          value={fileList}
          beforeUpload={onUpload}
          styleName="Image_upload"
        >
          图片
        </ImageUploader>
        <div onClick={onExpression}>
          <QIcon type="icon-weixiao" fontSize="45px" color={'#9fa09f'}/>
        </div>
        <div>
          <QButton
            width="50px" //设置按钮宽度
            height="45px" //设置按钮高度
            fontSize="12px" //设置按钮文字大小
            title="发送" //设置按钮文字
            background="#DA2339" //设置按钮背景颜色
            color="#fff" //设置按钮文字颜色
            borderRadius="17px" //设置按钮圆角
            onClick={onSend}
          />
        </div>
      </div>
      {show ? (
        <div styleName="expression">
          {expression.map((dt) => {
            return (
              <QImage
                key={dt.id}
                src={dt.image}
                alt=""
                onClick={() => onImage(dt)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Qsoket;

import React, { useState } from 'react';
import { QButton } from '@@@';
import { Dialog, Toast, DotLoading } from 'antd-mobile';
import './styles.less';

function QDialog(props) {
  const [ok, setOk] = useState(false);
  const okBox = ok ? <DotLoading color="primary" /> : '确定';
  const onClick = () => {
    // Dialog.show({
    //   content:
    //     '删除订单后将无法还原，订单删除不等于取消预订，确定完全删除此订单？',
    //   closeOnAction: true,
    //   actions: [
    //     [
    //       {
    //         key: 'cancel',
    //         text: '取消',
    //       },
    //       {
    //         key: 'delete',
    //         text: okBox,
    //         bold: true,
    //       },
    //     ],
    //   ],
    // });

    Dialog.confirm({
      content:
        '删除订单后将无法还原，订单删除不等于取消预订，确定完全删除此订单？',
      confirmText: okBox,
      onConfirm: () => {
        setOk(true);
        setTimeout(() => setOk(false), 2000);
        // Toast.show({
        //   icon: 'success',
        //   content: '提交成功',
        //   position: 'bottom',
        // });
      },
    });
  };
  return (
    <>
      <QButton
        title={'删除订单'}
        borderRadius={'5.555556vw'}
        fontSize={'2.898551vw'}
        onClick={onClick}
      />
    </>
  );
}

export default QDialog;

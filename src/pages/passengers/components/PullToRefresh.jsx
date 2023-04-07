import React, { useEffect } from 'react';
import { PullToRefresh, List } from 'antd-mobile';
function Passengers(props) {
  return (
    <PullToRefresh>
      <List
        style={{ minHeight: '100vh' }}
        header={
          <div
            style={{
              textAlign: 'center',
              height: '50px',
              lineHeight: '50px',
            }}
          >
            {'下拉可刷新乘客列表'}
          </div>
        }
      >
        {props.children}
      </List>
    </PullToRefresh>
  );
}

export default Passengers;

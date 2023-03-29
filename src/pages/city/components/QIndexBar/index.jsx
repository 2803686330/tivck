import React, { useEffect } from 'react';
import { IndexBar, List } from 'antd-mobile';
import { connect } from 'dva';
import './styles.less';
export default connect(({ city }) => {
  return {
    cityList: city.cityList,
  };
})(QIndexBar);
function QIndexBar(props) {
  const { cityList } = props;
  return (
    <IndexBar>
      {cityList.map((group) => {
        const { title, citys } = group;
        return (
          <IndexBar.Panel index={title} title={title} key={title}>
            <List>
              {citys
                ? citys.map((item, index) => {
                    return <List.Item key={index}>{item.name}</List.Item>;
                  })
                : null}
            </List>
          </IndexBar.Panel>
        );
      })}
    </IndexBar>
  );
}

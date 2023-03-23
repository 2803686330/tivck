import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'umi';
export default connect((state) => {
  return {};
})(Authorized);

function Authorized(props) {
  if (localStorage.getItem('token')) {
    return props.children;
  } else {
    return <Redirect to="/user/login"></Redirect>;
  }
}

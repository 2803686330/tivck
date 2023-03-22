import React from 'react';

function QHead(props) {
  const { title = '' } = props;
  return (
    <div>
      <div></div>
      <div>{title}</div>
    </div>
  );
}

export default QHead;

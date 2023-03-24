import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';

export default function Demo(props) {
  cookies.set('xxxxx', 'xxxxxx');
  cookies.set('aaaaaa', 'xxaaaaaxxxx');
  console.log(cookies, 'cookie');
  console.log(cookies.get('xxxxx'), 1);
  console.log(cookies.get(), 2);

  return <p>ddddd</p>;
}

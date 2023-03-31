import config from '../src/cfgs/common';

const { ENV } = process.env;

export default {
  dev: {
    '/de': {
      target: config.localhostUrl[ENV],
      changeOrigin: true,
      pathRewrite: {
        '^/dev': '',
      },
    },
  },
};

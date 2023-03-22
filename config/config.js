import { defineConfig } from 'umi';
import theme from '../src/theme/variables';
import routes from './router.config';
import env from './env';

const path = require('path');
const pxtorem = require('postcss-pxtorem');

export default defineConfig({
  ...env,
  hash: true,
  dynamicImport: {
    loading: '@/pages/loading',
  },
  targets: {
    ie: 11,
  },
  define: {
    environment: process.env.ENV,
  },
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@assets': path.resolve(__dirname, '../src/assets/images'),
    '@less': path.resolve(__dirname, '../src/theme/mixins.less'),
  },
  routes,
  theme,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  fastRefresh: {},
  webpack5: {},
  exportStatic: {},
  inlineLimit: 10000,
  extraBabelPlugins: [
    [
      'react-css-modules',
      {
        exclude: 'node_modules',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        filetypes: {
          '.less': {
            syntax: 'postcss-less',
          },
        },
      },
    ],
  ],
  extraPostCSSPlugins: [
    //配置额外的 postcss 插件。
    pxtorem({
      rootValue: 75, // 指定转换倍率 我现在设置这个表示1rem=10px;
      propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
      selectorBalckList: ['.antd-'], // 匹配不被转换为rem的选择器，例如UI框架antd-mobile
      exclude: /node_modules/i,
    }),
  ],
  cssLoader: {
    modules: {
      auto: function (opt) {
        const index = path.normalize('src/styles/index.less');
        const components = path.normalize('src/components');

        return (
          !opt.includes('node_modules') &&
          !opt.includes(index) &&
          !opt.includes(components)
        );
      },
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
  // dva: {
  //   immer: true,
  // }
  // mfsu: {},
});

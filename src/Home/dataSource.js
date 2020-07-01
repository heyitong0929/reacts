import React from 'react';

export const BannerDataSource = {
  wrapper: { className: 'banner' },
  textWrapper: { className: 'banner-text-wrapper' },
  title: {
    className: 'banner-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner-content',
    children: '愿你能温柔对待世界',
  },
  button: { className: 'banner-button', children: 'Enter' },
};

export const FooterDataSource = {
  wrapper: { className: 'home-page-wrapper footer-wrapper' },
  OverPack: { className: 'footer', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'You need to calm down, and you will have more power.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Yi Tong' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by <a href="http://www.beian.miit.gov.cn">京ICP备19043930号-1</a> All right reserved
      </span>
    ),
  },
};

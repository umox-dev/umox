import { NextRouteImpl } from '@/types';

export const getURL = (path: NextRouteImpl = '/') => {
  let url = process.env.ZEABUR_WEB_URL || 'http://localhost:8888/';
  url = url.replace(/\/+$/, '');
  return `${url}${path}`;
};

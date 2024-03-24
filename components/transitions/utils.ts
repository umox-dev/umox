import { NextRouteImpl } from '.';

export const isExternalUrl = (href: NextRouteImpl) => {
  const pattern = /^https?:\/\//;
  return pattern.test(href);
};

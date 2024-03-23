import { NextRouteImpl } from '.';

export const isExternalUrl = (href: NextRouteImpl) => {
  const pattern = /^(http:\/\/|https:\/\/)/;
  return pattern.test(href);
};

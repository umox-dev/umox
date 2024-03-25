'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

const NavItem: FC<PropsWithChildren<LinkProps<string>>> = (props) => {
  const { href, children } = props;
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? 'text-blue-500' : ''}>
      {children}
    </Link>
  );
};

export default NavItem;

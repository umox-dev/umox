'use client';

import { MouseEventHandler, useCallback, useEffect, useMemo, useTransition } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import {
  NavigateFn,
  NextRouteImpl,
  PageAnimationProps,
  PageTransitionProps,
  VanillaTagName,
} from './types';
import { useIsFirstRender, usePageTransition, useRouterPath } from './hooks';
import { Context } from './context';

export * from './hooks';
export * from './types';

export const PageTransitions = <TagName extends VanillaTagName>(
  props: PageTransitionProps<TagName>,
) => {
  const { children, as, ...rest } = props;
  const controls = useAnimationControls();
  const [pending, start] = useTransition();
  const router = useRouter();
  const routerPath = useRouterPath();
  const pathname = usePathname();

  const navigate: NavigateFn = useCallback(
    (type, { href, options }) => {
      if (pathname === href) {
        return;
      }
      start(async () => {
        router[type](href, options);
        await controls.start('exit');
      });
    },
    [pathname, controls],
  );

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const a = (e.target as Element).closest('a');
    if (a) {
      e.preventDefault();
      const href = a.getAttribute('href') as NextRouteImpl;
      if (href) {
        navigate('push', { href });
      }
    }
  };

  const Motion = useMemo(() => {
    return motion(as || 'div');
  }, [as]);

  return (
    <Context.Provider value={{ pending, navigate, controls, routerPath }}>
      <Motion onClickCapture={onClick} {...rest}>
        {children}
      </Motion>
    </Context.Provider>
  );
};

export function PageAnimation<TagName extends VanillaTagName>(props: PageAnimationProps<TagName>) {
  const { as, ...rest } = props;

  const isFirstRender = useIsFirstRender();
  const { controls, pending, routerPath } = usePageTransition();

  const Motion = useMemo(() => motion(as || 'div'), [as]);

  useEffect(() => {
    if (pending || isFirstRender) {
      return;
    }
    controls.start('enter');
  }, [pending, isFirstRender]);

  return (
    <AnimatePresence initial={false}>
      <Motion
        key={routerPath.current}
        initial="exit"
        custom={routerPath}
        animate={controls}
        {...rest}
      />
    </AnimatePresence>
  );
}

export function PageMotion<TagName extends VanillaTagName>(props: PageAnimationProps<TagName>) {
  const { children, as, ...rest } = props;

  const { routerPath } = usePageTransition();

  const Motion = useMemo(() => motion(as || 'div'), [as]);

  return (
    <Motion custom={routerPath} {...rest}>
      {children}
    </Motion>
  );
}

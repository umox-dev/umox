import { use, useEffect, useMemo, useRef } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { Context } from './context';

export const usePreviousValue = <T>(value?: T): T | undefined => {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = value;
    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
};

export const useRouterPath = () => {
  const pathname = usePathname();
  const params = useParams();
  const currentRouterPath = useMemo(() => {
    return Object.entries(params).reduce((path, [paramKey, paramValue]) => {
      return path.replace(`/${paramValue}`, `/[${paramKey}]`);
    }, pathname);
  }, [pathname, params]);
  const previousRouterPath = usePreviousValue(currentRouterPath);

  return { current: currentRouterPath, previous: previousRouterPath };
};

export const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
    return true;
  }

  return isFirstRenderRef.current;
};

export const usePageTransition = () => use(Context);

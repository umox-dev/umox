import { createContext } from 'react';
import { TransitionContext } from './types';
import { noop } from 'lodash-es';

export const Context = createContext<TransitionContext>({
  pending: false,
  navigate: noop,
  controls: {
    start: async (): Promise<void> => {},
    set: noop,
    stop: noop,
    mount: (): (() => void) => () => {},
  },
  routerPath: {
    current: '/',
    previous: '/',
  },
});

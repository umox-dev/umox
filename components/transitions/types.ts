import { HTMLMotionProps, Target, TargetAndTransition, useAnimationControls } from 'framer-motion';
import { useRouterPath } from './hooks';
import {
  AppRouterInstance,
  NavigateOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type TransitionContext = {
  pending: boolean;
  navigate: NavigateFn;
  controls: ReturnType<typeof useAnimationControls>;
  routerPath: ReturnType<typeof useRouterPath>;
};

export type NavigateType = 'push' | 'replace';
export type NavigateArgs = { href: NextRouteImpl; options?: NavigateOptions };

export type NavigateFn = (type: NavigateType, args: NavigateArgs) => void;

export type RouterPath = ReturnType<typeof useRouterPath>;
export type VanillaTagName = keyof HTMLElementTagNameMap;

export type PageResolver = (
  routerPath: RouterPath,
  current: Target,
  velocity: Target,
) => TargetAndTransition | string;
export type PageVariant = TargetAndTransition | PageResolver;
export type PageVariants = { enter: PageVariant; exit: PageVariant };

export type PageAnimationProps<TagName extends VanillaTagName> = Omit<
  HTMLMotionProps<TagName>,
  'initial' | 'exit' | 'animate' | 'custom'
> & { as?: TagName; variants: PageVariants };

export type PageTransitionProps<TagName extends VanillaTagName> = Omit<
  HTMLMotionProps<TagName>,
  'onClickCapture'
> & { as?: TagName };

export type NextRouteImpl = __next_route_internal_types__.RouteImpl<string>;

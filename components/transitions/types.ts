import { HTMLMotionProps, Target, TargetAndTransition, useAnimationControls } from 'framer-motion';
import { useRouterPath } from './hooks';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { NextRouteImpl } from '@/types';

export type TransitionContext = {
  pending: boolean;
  navigate: NavigateFn;
  controls: ReturnType<typeof useAnimationControls>;
  routerPath: ReturnType<typeof useRouterPath>;
};

// `NavigateType` is defined as 'replace' only. This restriction is due to the behavior of
// browsers when performing forward and backward navigation, which can cause page transitions
// to behave inconsistently.
// TODO: 'push' navigation.
export type NavigateType = 'replace';
// export type NavigateType = 'push' | 'replace';

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

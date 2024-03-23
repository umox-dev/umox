'use client';

import { PageMotion, usePageTransition } from '@/components/transitions';

export default function Login() {
  const { navigate } = usePageTransition();

  const navigateHome = () => navigate('push', { href: '/' });

  return (
    <PageMotion variants={{ enter: { y: 0 }, exit: { y: '-100%' } }}>
      <div>123213</div>
      <button onClick={navigateHome}>[Navigate With Animation]</button>
    </PageMotion>
  );
}

'use client';

import { PageMotion, usePageTransition } from '@/components/transitions';

export default function Login() {
  const { navigate } = usePageTransition();

  const navigate1 = () => navigate('replace', { href: '/' });
  const navigate2 = () => navigate('replace', { href: 'https://www.google.com' });

  return (
    <PageMotion variants={{ enter: { y: 0 }, exit: { y: '-100%' } }}>
      <div>123213</div>
      <button onClick={navigate1}>[Navigate With Animation]</button>
      <button onClick={navigate2}>[Navigate Thrid Party]</button>
    </PageMotion>
  );
}

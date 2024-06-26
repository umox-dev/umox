'use client';

import { PageMotion, usePageTransition } from '@/components/transitions';

export default function NavigateDemo({ children }: Readonly<{ children: React.ReactNode }>) {
  const { navigate } = usePageTransition();

  const navigate1 = () => navigate('replace', { href: '/' });
  const navigate2 = () => navigate('replace', { href: 'https://www.google.com' });

  return (
    <PageMotion variants={{ enter: { x: 0 }, exit: { x: '100%' } }}>
      {children}
      <div className="flex gap-4">
        <button className="text-blue-400" onClick={navigate1}>
          [Navigate With Animation]
        </button>
        <button className="text-blue-400" onClick={navigate2}>
          [Navigate Third Party]
        </button>
      </div>
    </PageMotion>
  );
}

'use client';

import { signInWithOAuth } from '@/supabase/auth/client';

const OAuth = () => {
  const oAuthProviders = [{ name: 'github', displayName: 'GitHub' }];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await signInWithOAuth(e);
  };

  return (
    <div>
      {oAuthProviders.map((provider) => (
        <form key={provider.name} className="pb-2" onSubmit={handleSubmit}>
          <input type="hidden" name="provider" value={provider.name} />
          <button type="submit" className="text-blue-400">
            {provider.displayName}
          </button>
        </form>
      ))}
    </div>
  );
};
export default OAuth;

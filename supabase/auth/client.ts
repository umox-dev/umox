'use client';

import { type Provider } from '@supabase/supabase-js';
import { createClient } from '../client';
import { getURL } from '@/utils/helper';

export async function signInWithOAuth(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const provider = String(formData.get('provider')).trim() as Provider;

  const supabase = createClient();
  const redirectURL = getURL('/auth/oauth');
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: redirectURL,
    },
  });
}

'use server';

import { createClient } from '@/supabase/server';
import { getURL } from '@/utils/helper';
import { revalidatePath } from 'next/cache';

export type ActionResponse = { code: number; message: string; data: unknown };

export async function login(formData: FormData): Promise<ActionResponse> {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  revalidatePath('/', 'layout');

  if (error) {
    return { code: -1, message: error?.message, data: null };
  }
  return { code: 0, message: '', data: null };
}

export async function signup(formData: FormData): Promise<ActionResponse> {
  const supabase = createClient();

  const redirectURL = getURL('/auth/confirm');

  const { error, data } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: redirectURL,
    },
  });

  revalidatePath('/', 'layout');

  if (error) {
    return { code: -1, message: error?.message, data: null };
  }
  return { code: 0, message: '', data: data.user };
}

export async function signout(): Promise<ActionResponse> {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  revalidatePath('/', 'layout');

  if (error) {
    return { code: -1, message: error?.message, data: null };
  }
  return { code: 0, message: '', data: null };
}

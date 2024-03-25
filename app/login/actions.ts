'use server';

import { createClient } from '@/supabase/server';
import { revalidatePath } from 'next/cache';

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  revalidatePath('/', 'layout');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  revalidatePath('/', 'layout');
}

export async function signout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  revalidatePath('/', 'layout');
}

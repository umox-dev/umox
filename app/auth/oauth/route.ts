import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const redirectTo = request.nextUrl.clone();

  const code = searchParams.get('code');
  redirectTo.searchParams.delete('code');

  const next = searchParams.get('next') ?? '/';
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('next');

  if (code) {
    const supabase = createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error';
  return NextResponse.redirect(redirectTo);
}

import { createClient } from '@/supabase/server';
import { login, signout, signup } from '../actions';
import FormButton from './button';

export default async function LoginForm() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return (
      <form className="flex flex-col gap-4 rounded-md bg-slate-300 p-4">
        <div className="flex items-start gap-4">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <div className="flex items-start gap-4">
          <FormButton trigger={login}>Log in</FormButton>
          <FormButton trigger={signup}>Sign up</FormButton>
        </div>
      </form>
    );
  }

  return (
    <form>
      <p>Hello {JSON.stringify(data?.user)}</p>
      <FormButton trigger={signout}>Sign Out</FormButton>
    </form>
  );
}

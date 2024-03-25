import { createClient } from '@/supabase/server';
import { login, signout, signup } from '../actions';

export default async function LoginForm() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return (
      <form className="flex gap-4 rounded-md bg-slate-300 p-4">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button className="text-blue-400" formAction={login}>
          Log in
        </button>
        <button className="text-blue-400" formAction={signup}>
          Sign up
        </button>
      </form>
    );
  }

  return (
    <form>
      <p>Hello {JSON.stringify(data?.user)}</p>
      <button className="text-blue-400" formAction={signout}>
        Sign Out
      </button>
    </form>
  );
}

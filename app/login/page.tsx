import Title from './components/title';
import NavigateDemo from './components/navigate';
import LoginForm from './components/form';

export default async function LoginPage() {
  const env = {
    1: process.env.ZEABUR_WEB_URL,
    2: process.env.ZEABUR_CONSOLE_URL,
    3: process.env.ZEABUR_web_URL,
    4: process.env.ZEABUR_console_URL,
    5: process.env.CONTAINER_HOSTNAME,
    6: process.env.ZEABUR_GIT_REPO_NAME,
  };
  return (
    <div className="m-8 flex flex-col gap-8">
      <Title text={JSON.stringify(env)} />

      <Title text="LOGIN PAGE" />
      <NavigateDemo>
        <Title text="NAVIGATE" />
      </NavigateDemo>

      <div>
        <Title text="LOGIN FORM" />
        <LoginForm />
      </div>
    </div>
  );
}

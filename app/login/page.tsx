import Title from './components/title';
import NavigateDemo from './components/navigate';
import LoginForm from './components/form';

export default async function LoginPage() {
  return (
    <div className="m-8 flex flex-col gap-8">
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

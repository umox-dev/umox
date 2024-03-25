import Link from 'next/link';
import NavItem from './NavItem';

export default async function Navbar() {
  return (
    <header className="flex">
      <nav className="m-8">
        <ul className="container flex gap-10">
          <li>
            <NavItem href="/">Home</NavItem>
          </li>
          <li>
            <NavItem href="/login">Login</NavItem>
          </li>
          <li>
            <Link href="https://www.google.com">Third Party</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

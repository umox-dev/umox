import Link from 'next/link';

export default async function Navbar() {
  return (
    <header>
      <nav className="py-8">
        <ul className="container flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

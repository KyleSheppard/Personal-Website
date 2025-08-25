import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Kyle Sheppard - Personal Website',
  description: 'My personal website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Kyle Sheppard</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/hobbies">Hobbies</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          © 2025 Kyle Sheppard | All rights reserved
        </footer>
      </body>
    </html>
  );
}

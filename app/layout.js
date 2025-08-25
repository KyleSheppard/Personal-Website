import './globals.css';

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
            <a href="/">Home</a>
            <a href="/hobbies">Hobbies</a>
            <a href="/projects">Projects</a>
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

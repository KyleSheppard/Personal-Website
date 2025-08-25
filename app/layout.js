import './globals.css';

export const metadata = {
  title: 'Kyle Sheppard Personal Site',
  description: 'Personal website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

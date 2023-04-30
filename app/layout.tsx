import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Generated by grant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <div>
      <Link href="/">
        <h1>Grant's Blog</h1>
      </Link>
      <p>✌🏽 Welcome to my tech blog 💻</p>
    </div>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Grant</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}

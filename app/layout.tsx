import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Link from "next/link";
import {
  Courier_Prime,
  Fira_Sans,
  JetBrains_Mono,
} from "next/font/google";

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
  display: "swap",
});

const fira = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

const jetbrains_mono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const fontVariables = [courier.variable, fira.variable, jetbrains_mono.variable].join(" ");

export const metadata = {
  title: "EggyShrimp's Writings",
  description: "A blog about my life and experiences",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--color-paper)] focus:px-4 focus:py-2 focus:text-[var(--color-accent)] focus:shadow focus:outline-dashed">
          Skip to content
        </a>
        <header className='mx-auto max-w-[65ch] flex justify-between items-end py-6 border-b mb-8 px-0' style={{ borderColor: 'var(--color-line)' }}>
          <Link
            href="/"
            className="font-courier text-2xl font-bold no-underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Eggy Shrimp
          </Link>
          <nav className='flex items-center gap-0'>
            <Link
              href="/"
              className="font-courier text-sm no-underline hover:underline py-2 pr-2"
              style={{ color: 'var(--color-muted)' }}
            >
              Home
            </Link>
            <span className="font-courier text-sm px-1" style={{ color: 'var(--color-muted)' }}>·</span>
            <Link
              href="/about-me"
              className="font-courier text-sm no-underline hover:underline py-2 pl-2"
              style={{ color: 'var(--color-muted)' }}
            >
              About Me
            </Link>
          </nav>
        </header>
        <div id="main" className='prose prose-neutral prose-base break-words mx-auto'>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}

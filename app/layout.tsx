import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import styles from "./index.module.scss";
import classnames from "classnames";
import Link from "next/link";
import {
  Lato,
  Fira_Sans,
  Noto_Sans_SC,
  JetBrains_Mono,
} from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  adjustFontFallback: false,
});

const noto_sans_sc = Noto_Sans_SC({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-notosans",
  preload: false,
});

const fira = Fira_Sans({
  weight: ["100", "400", "700"],
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

const fonts = [
  { name: "lato", variable: lato.variable },
  { name: "notoSansSC", variable: noto_sans_sc.variable },
  { name: "fira", variable: fira.variable },
  { name: "jetbrainsMono", variable: jetbrains_mono.variable },
];

const fontVariables = fonts.map(f => f.variable).join(" ");

export const metadata = {
  title: "EggyShrimp's Writings",
  description: "A blog about my life and experiences",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body
        className={`antialiased`}
      >
        <header className='mx-auto prose prose-neutral prose-base flex gap-4 py-4'>
          <span className='text-2xl font-bold'>🐱</span>
          <nav className='flex items-center gap-4'>
            <Link
              href="/"
              className="flex items-center gap-1 no-underline transition-colors duration-200 hover:text-blue-700"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/about-me"
              className="flex items-center gap-1 no-underline transition-colors duration-200 hover:text-blue-700"
            >
              <span>About Me</span>
            </Link>
          </nav>
        </header>
        <div className='prose prose-neutral prose-base break-all mx-auto'>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}

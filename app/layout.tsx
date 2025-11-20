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
        <header className={styles.header}>
          <span className={styles['header__logo']}>🐱</span>
          <Link
            href="/"
            className={classnames(styles['header__btn'], styles['header__archive'])}
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className={classnames(styles['header__btn'], styles['header__about'])}
          >
            About Me
          </Link>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}

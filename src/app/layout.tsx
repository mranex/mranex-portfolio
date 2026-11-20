import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Newsreader } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const themeBootScript = `(function(){try{var m=localStorage.getItem('mranex-theme');if(m!=='light'&&m!=='dark'&&m!=='system'){m='system';}var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.themeMode=m;}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F141A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mranex.com"),
  title: {
    default:
      "ThS. BS. Nguyễn Trường Ân (MRANEX) — Nội khoa, Nghiên cứu Y khoa & Phần mềm AI",
    template: "%s | MRANEX",
  },
  description:
    "Hồ sơ học thuật, lâm sàng và kỹ thuật của Thạc sĩ Bác sĩ Nguyễn Trường Ân (MRANEX) — chuyên ngành Nội khoa (ĐH Y Dược Cần Thơ), nghiên cứu Hô hấp – Hồi sức & Nội Thần kinh, cùng các hệ thống AI & phần mềm.",
  alternates: {
    canonical: "https://mranex.com",
  },
  openGraph: {
    type: "website",
    url: "https://mranex.com",
    siteName: "MRANEX",
    title: "ThS. BS. Nguyễn Trường Ân (MRANEX) — Clinical Academic Monograph",
    description:
      "Thạc sĩ Bác sĩ Nội khoa | Medical Researcher | Independent Software & AI Developer.",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThS. BS. Nguyễn Trường Ân (MRANEX)",
    description:
      "Master of Medicine (Internal Medicine), Medical Researcher & Independent Software/AI Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${newsreader.variable} ${beVietnamPro.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-screen bg-canvas text-ink font-sans antialiased">
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

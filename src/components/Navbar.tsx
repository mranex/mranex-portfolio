"use client";

import React, { useEffect, useState } from "react";
import { List, Monitor, Moon, Sun, X } from "@phosphor-icons/react";
import { portfolioData, type Locale } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { useTheme, type ThemeMode } from "@/context/ThemeContext";

export function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const { themeMode, resolvedTheme, setThemeMode, toggleLightDark, mounted } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const themeOptions: {
    id: ThemeMode;
    label: { vi: string; en: string };
    shortLabel: { vi: string; en: string };
    icon: React.ReactNode;
  }[] = [
    {
      id: "system",
      label: { vi: "Theo hệ thống", en: "System theme" },
      shortLabel: { vi: "Hệ thống", en: "Auto" },
      icon: <Monitor size={14} weight="regular" />,
    },
    {
      id: "light",
      label: { vi: "Giao diện sáng", en: "Light mode" },
      shortLabel: { vi: "Sáng", en: "Light" },
      icon: <Sun size={14} weight="regular" />,
    },
    {
      id: "dark",
      label: { vi: "Giao diện tối", en: "Dark mode" },
      shortLabel: { vi: "Tối", en: "Dark" },
      icon: <Moon size={14} weight="regular" />,
    },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[var(--nav-bg)] backdrop-blur-sm border-t-[3px] border-t-accent-solid border-b border-hairline">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-16">
          {/* Institutional Masthead Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 text-ink hover:text-accent transition-colors min-h-[44px] whitespace-nowrap"
          >
            <span className="font-display text-[15px] sm:text-lg font-medium tracking-tight">
              Nguyễn Trường Ân
            </span>
            <span className="hidden sm:inline text-hairline" aria-hidden="true">
              |
            </span>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              MRANEX
            </span>
          </a>

          {/* Desktop Section Links */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-5">
            {portfolioData.nav.links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13px] font-medium text-body hover:text-accent hover:underline underline-offset-4 transition-colors whitespace-nowrap py-2"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Switcher + VN|EN + Mobile Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Desktop 3-mode Theme Switcher (System / Light / Dark) */}
            <div
              role="group"
              aria-label={locale === "vi" ? "Chế độ giao diện" : "Theme mode"}
              className="hidden sm:inline-flex border border-hairline bg-paper rounded-[2px] overflow-hidden"
            >
              {themeOptions.map((opt) => {
                const active = mounted && themeMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setThemeMode(opt.id)}
                    aria-label={t(opt.label)}
                    title={t(opt.label)}
                    aria-pressed={active}
                    className={`w-8 h-[34px] inline-flex items-center justify-center transition-colors cursor-pointer ${
                      active
                        ? "bg-accent-solid text-white"
                        : "bg-paper text-body hover:bg-tint"
                    }`}
                  >
                    {opt.icon}
                  </button>
                );
              })}
            </div>

            {/* Mobile Single-Tap Quick Light/Dark Toggle */}
            <button
              type="button"
              onClick={toggleLightDark}
              aria-label={
                locale === "vi"
                  ? "Chuyển nhanh giao diện sáng/tối"
                  : "Quick toggle light/dark mode"
              }
              title={
                locale === "vi"
                  ? "Chuyển nhanh sáng/tối"
                  : "Toggle light/dark mode"
              }
              className="sm:hidden w-9 h-[34px] inline-flex items-center justify-center border border-hairline bg-paper text-ink hover:border-accent rounded-[2px] cursor-pointer"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun size={15} weight="regular" />
              ) : (
                <Moon size={15} weight="regular" />
              )}
            </button>

            {/* VN | EN Locale Switcher */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex border border-hairline bg-paper rounded-[2px] overflow-hidden"
            >
              {(["vi", "en"] as Locale[]).map((code) => {
                const active = locale === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={active}
                    className={`px-2.5 sm:px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer min-w-[36px] sm:min-w-[40px] min-h-[34px] ${
                      active
                        ? "bg-accent-solid text-white"
                        : "bg-paper text-body hover:bg-tint"
                    }`}
                  >
                    {code === "vi" ? "VN" : "EN"}
                  </button>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center border border-hairline bg-paper text-ink hover:border-accent rounded-[2px] cursor-pointer"
            >
              {menuOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer with Nav Links & 3-Mode Theme Control */}
      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-paper border-t border-hairline border-b border-hairline px-4 py-4 space-y-3"
        >
          <ul className="divide-y divide-divider">
            {portfolioData.nav.links.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-sm font-medium text-ink hover:text-accent"
                >
                  <span>{t(item.label)}</span>
                  <span className="font-mono text-[11px] text-muted">0{idx + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* 3-Mode Theme Selector inside Mobile Menu */}
          <div className="pt-3 border-t border-hairline flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {locale === "vi" ? "Giao diện hiển thị" : "Appearance"}
            </span>
            <div className="grid grid-cols-3 border border-hairline bg-canvas rounded-[2px] overflow-hidden divide-x divide-hairline">
              {themeOptions.map((opt) => {
                const active = mounted && themeMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setThemeMode(opt.id)}
                    aria-pressed={active}
                    className={`py-2.5 px-2 inline-flex items-center justify-center gap-1.5 font-mono text-[11px] transition-colors cursor-pointer min-h-[40px] ${
                      active
                        ? "bg-accent-solid text-white"
                        : "bg-paper text-body hover:bg-tint"
                    }`}
                  >
                    {opt.icon}
                    <span>{t(opt.shortLabel)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Stethoscope } from "@phosphor-icons/react";
import { portfolioData, siteConfig } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";

export function HeroSection() {
  const { t } = useLocale();
  const { hero } = portfolioData;

  return (
    <section id="top" className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Publication Masthead Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-10 border-b border-hairline font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{t(hero.mastheadLeft)}</span>
          <span>{hero.mastheadRight}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Primary Medical & Academic Identity */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-wash border border-accent-border rounded-[2px] mb-5">
              <Stethoscope size={14} weight="regular" className="text-accent shrink-0" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent font-medium">
                {t(hero.specialtyBadge)}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-normal tracking-[-0.02em] leading-[1.1] text-ink mb-4">
              {t(hero.fullName)}
            </h1>

            <p className="text-sm sm:text-[15px] font-medium text-accent leading-relaxed mb-6">
              {t(hero.subline)}
            </p>

            <p className="text-[15px] sm:text-base text-body leading-[1.78] max-w-[64ch] mb-8">
              {t(hero.bio)}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent-solid text-white hover:bg-accent-hover rounded-[2px] text-sm font-medium transition-colors min-h-[44px]"
              >
                <span>{t(hero.ctaResearch)}</span>
                <ArrowDown size={15} weight="regular" />
              </a>
              <a
                href="#clinical"
                className="inline-flex items-center gap-2 px-4 py-3 bg-paper text-ink border border-hairline hover:border-accent rounded-[2px] text-sm font-medium transition-colors min-h-[44px]"
              >
                <span>{t(hero.ctaClinical)}</span>
              </a>
              <a
                href="#engineering"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-accent hover:underline underline-offset-4 min-h-[44px]"
              >
                <span>{t(hero.ctaEngineering)}</span>
                <ArrowDown size={14} weight="regular" />
              </a>
            </div>
          </div>

          {/* Right Formal Clinical & Academic Dossier Ledger */}
          <aside
            aria-label={t(hero.ledgerTitle)}
            className="lg:col-span-5 bg-paper border border-hairline border-t-2 border-t-accent-solid"
          >
            <div className="px-5 py-3.5 bg-tint border-b border-hairline flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-medium">
                {t(hero.ledgerTitle)}
              </span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-muted hover:text-accent"
              >
                <span>github/mranex</span>
                <ArrowUpRight size={12} weight="regular" />
              </a>
            </div>

            <dl className="divide-y divide-divider">
              {hero.ledgerRows.map((row) => (
                <div
                  key={row.label.vi}
                  className={`px-5 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-3 items-baseline ${
                    row.highlightNeutral ? "bg-tint/70" : ""
                  }`}
                >
                  <dt className="sm:col-span-5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                    {t(row.label)}
                  </dt>
                  <dd className="sm:col-span-7 text-sm font-medium text-ink">
                    {t(row.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

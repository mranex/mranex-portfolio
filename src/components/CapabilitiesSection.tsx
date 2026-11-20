"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function CapabilitiesSection() {
  const { locale, t } = useLocale();
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="py-16 md:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(capabilities.eyebrow)}
          title={t(capabilities.title)}
          subtitle={t(capabilities.subtitle)}
        />

        {/* 2x2 Typographic Matrix (Medicine & Biostatistics First, Zero % Bars) */}
        <div className="bg-paper border border-hairline divide-y divide-hairline">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-hairline">
            {capabilities.groups.slice(0, 2).map((group) => (
              <div key={group.code} className="p-6 sm:p-8">
                <div className="flex items-baseline gap-2.5 mb-4">
                  <span className="font-mono text-xs font-medium text-accent">
                    {group.code}
                  </span>
                  <h3 className="font-display text-2xl text-ink">
                    {t(group.title)}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items[locale].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-body leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-accent-solid shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-hairline">
            {capabilities.groups.slice(2, 4).map((group) => (
              <div key={group.code} className="p-6 sm:p-8">
                <div className="flex items-baseline gap-2.5 mb-4">
                  <span className="font-mono text-xs font-medium text-accent">
                    {group.code}
                  </span>
                  <h3 className="font-display text-2xl text-ink">
                    {t(group.title)}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items[locale].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-body leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-accent-solid shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests Strip */}
        <div className="mt-6 bg-paper border border-hairline p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted shrink-0">
            {t(capabilities.interestsLabel)}
          </span>
          <div className="flex flex-wrap gap-2">
            {capabilities.interests[locale].map((interest) => (
              <span
                key={interest}
                className="px-2.5 py-1 bg-tint border border-hairline rounded-[2px] text-xs text-body"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

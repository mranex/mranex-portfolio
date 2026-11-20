"use client";

import React from "react";
import { Heartbeat } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function OutreachSection() {
  const { locale, t } = useLocale();
  const { outreach } = portfolioData;

  return (
    <section id="outreach" className="py-16 md:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(outreach.eyebrow)}
          title={t(outreach.title)}
          subtitle={t(outreach.subtitle)}
        />

        <div className="bg-paper border border-hairline border-l-[4px] border-l-accent-solid p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-medium">
                <Heartbeat size={16} weight="regular" />
                <span>{t(outreach.dispatchCode)}</span>
              </div>

              <p className="text-[15px] text-body leading-[1.75]">
                {t(outreach.description)}
              </p>

              <div className="pt-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted mb-2.5">
                  {t(outreach.conditionsLabel)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {outreach.conditions[locale].map((cond) => (
                    <span
                      key={cond}
                      className="px-2.5 py-1 bg-tint border border-hairline rounded-[2px] text-xs font-medium text-ink"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 border border-hairline divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y divide-hairline bg-canvas">
              {outreach.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="p-4 sm:p-5 flex items-baseline justify-between gap-3"
                >
                  <span className="font-display text-3xl text-accent">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-body text-right">
                    {t(metric.unit)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

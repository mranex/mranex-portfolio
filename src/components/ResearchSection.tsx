"use client";

import React from "react";
import { ArrowUpRight, Article } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function ResearchSection() {
  const { locale, t } = useLocale();
  const { research } = portfolioData;

  return (
    <section id="research" className="py-16 md:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(research.eyebrow)}
          title={t(research.title)}
          subtitle={t(research.subtitle)}
        />

        <div className="space-y-8">
          {research.papers.map((paper, idx) => (
            <article
              key={paper.id}
              className="bg-paper border border-hairline border-l-[3px] border-l-accent-solid p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Citation Metadata Rail */}
                <div className="lg:col-span-3 space-y-3 pb-4 lg:pb-0 border-b lg:border-b-0 border-divider">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent font-medium">
                    <Article size={15} weight="regular" />
                    <span>
                      {locale === "vi" ? `CÔNG TRÌNH 0${idx + 1}` : `PAPER 0${idx + 1}`}
                    </span>
                  </div>
                  <div className="font-display text-3xl text-ink">
                    {paper.publishedAt}
                  </div>
                  <div className="text-xs font-medium text-ink">
                    {paper.journal}
                  </div>
                  <div className="font-mono text-[11px] text-muted">
                    {t(paper.role)}
                  </div>
                  <div className="pt-2">
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-2 bg-accent-wash border border-accent-border text-accent hover:bg-accent-solid hover:text-white hover:border-accent-solid rounded-[2px] font-mono text-[10px] leading-snug transition-colors min-h-[40px] max-w-full"
                    >
                      <span className="font-medium shrink-0">DOI</span>
                      <span className="whitespace-nowrap">
                        {paper.doi.replace("https://doi.org/", "")}
                      </span>
                      <ArrowUpRight size={12} weight="regular" className="shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Right Academic Abstract & Clinical Parameter Matrix */}
                <div className="lg:col-span-9 space-y-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-[1.65rem] text-ink leading-[1.35] mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] italic text-muted leading-relaxed">
                      {paper.englishContext}
                    </p>
                  </div>

                  <p className="text-sm text-body leading-relaxed">
                    {t(paper.methodSummary)}
                  </p>

                  {/* Static Clinical Study Parameter Table */}
                  <div
                    className={`grid grid-cols-1 ${
                      paper.parameters.length >= 4
                        ? "sm:grid-cols-2 lg:grid-cols-4"
                        : "sm:grid-cols-2"
                    } border border-hairline bg-canvas divide-y sm:divide-y-0 sm:divide-x divide-hairline`}
                  >
                    {paper.parameters.map((param) => (
                      <div key={param.code} className="p-3.5">
                        <div className="font-mono text-xs font-medium text-accent mb-1">
                          {param.code}
                        </div>
                        <div className="text-xs font-medium text-ink mb-0.5">
                          {t(param.name)}
                        </div>
                        <div className="text-[11px] text-muted">
                          {t(param.role)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="font-mono text-[11px] text-muted pt-2 border-t border-divider">
                    {t(paper.note)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-t-2 border-rule-heavy pt-5 pb-7 mb-10 border-b border-hairline">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent font-medium mb-3">
        {eyebrow}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
        <h2 className="lg:col-span-7 font-display text-3xl sm:text-4xl font-normal tracking-[-0.015em] leading-[1.15] text-ink">
          {title}
        </h2>
        {subtitle ? (
          <p className="lg:col-span-5 text-sm sm:text-[15px] text-body leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

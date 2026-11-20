"use client";

import React from "react";
import { Certificate, Check, GraduationCap, Info } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function ClinicalCredentialsSection() {
  const { locale, t } = useLocale();
  const { clinical } = portfolioData;

  return (
    <section
      id="clinical"
      className="py-16 md:py-24 border-t border-hairline bg-section-alt"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(clinical.eyebrow)}
          title={t(clinical.title)}
          subtitle={t(clinical.subtitle)}
        />

        {/* Education + Clinical Scope Asymmetric Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          {/* Left: Education & License Transparency */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium">
              <GraduationCap size={16} weight="regular" />
              <span>{t(clinical.educationLabel)}</span>
            </div>

            <div className="bg-paper border border-hairline divide-y divide-divider">
              {clinical.education.map((edu) => (
                <div key={edu.period} className="p-5 space-y-1.5">
                  <div className="font-mono text-xs text-accent font-medium">
                    {edu.period}
                  </div>
                  <h3 className="font-display text-xl text-ink">
                    {t(edu.degree)}
                  </h3>
                  <div className="text-sm text-body">{t(edu.school)}</div>
                  <div className="font-mono text-[11px] text-muted">
                    {t(edu.grade)}
                  </div>
                </div>
              ))}
            </div>

            {/* Honest Practicing License Notice */}
            <div className="bg-paper border border-hairline border-l-[3px] border-l-accent-solid p-4 flex items-start gap-3">
              <Info size={17} weight="regular" className="text-accent shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <div className="font-mono uppercase tracking-[0.12em] text-ink font-medium mb-1">
                  {t(clinical.licenseTitle)}
                </div>
                <p className="text-body">{t(clinical.licenseNotice)}</p>
              </div>
            </div>
          </div>

          {/* Right: Clinical Focus & Teaching */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium mb-4">
                {t(clinical.clinicalLabel)}
              </h3>
              <ul className="bg-paper border border-hairline divide-y divide-divider">
                {clinical.clinicalFocus[locale].map((point) => (
                  <li
                    key={point}
                    className="px-5 py-3.5 flex items-start gap-3 text-sm text-body leading-relaxed"
                  >
                    <Check
                      size={15}
                      weight="regular"
                      className="text-accent shrink-0 mt-1"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium mb-4">
                {t(clinical.teachingLabel)}
              </h3>
              <ul className="bg-paper border border-hairline divide-y divide-divider">
                {clinical.teachingPoints[locale].map((point) => (
                  <li
                    key={point}
                    className="px-5 py-3.5 flex items-start gap-3 text-sm text-body leading-relaxed"
                  >
                    <Check
                      size={15}
                      weight="regular"
                      className="text-accent shrink-0 mt-1"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Formal Certifications & Training Table */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium mb-4">
            <Certificate size={16} weight="regular" />
            <span>{t(clinical.certsLabel)}</span>
          </div>

          {/* Desktop Semantic Table */}
          <div className="hidden sm:block bg-paper border border-hairline overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-tint border-b border-hairline font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  <th className="py-3 px-4 font-medium">{t(clinical.certColumns.name)}</th>
                  <th className="py-3 px-4 font-medium">{t(clinical.certColumns.issuer)}</th>
                  <th className="py-3 px-4 font-medium">{t(clinical.certColumns.hours)}</th>
                  <th className="py-3 px-4 font-medium text-right">
                    {t(clinical.certColumns.date)}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider text-sm">
                {clinical.certificates.map((cert) => (
                  <tr key={cert.name.vi} className="hover:bg-canvas/70">
                    <td className="py-3.5 px-4 font-medium text-ink">
                      {t(cert.name)}
                    </td>
                    <td className="py-3.5 px-4 text-body">{t(cert.issuer)}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-accent">
                      {t(cert.hoursOrGrade)}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-muted text-right">
                      {cert.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Credentials */}
          <div className="sm:hidden bg-paper border border-hairline divide-y divide-divider">
            {clinical.certificates.map((cert) => (
              <div key={cert.name.vi} className="p-4 space-y-1">
                <div className="text-sm font-medium text-ink">{t(cert.name)}</div>
                <div className="text-xs text-body">{t(cert.issuer)}</div>
                <div className="flex items-center justify-between pt-1 font-mono text-[11px]">
                  <span className="text-accent">{t(cert.hoursOrGrade)}</span>
                  <span className="text-muted">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  EnvelopeSimple,
  FilePdf,
  Globe,
  Phone,
} from "@phosphor-icons/react";
import { portfolioData, siteConfig } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";

export function ContactFooter() {
  const { locale, t } = useLocale();
  const { contact } = portfolioData;
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);

  const handleCopy = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2200);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  return (
    <footer id="contact" className="pt-16 pb-14 bg-paper border-t-2 border-t-accent-solid">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(contact.eyebrow)}
          title={t(contact.title)}
          subtitle={t(contact.subtitle)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-hairline">
          {/* Left Direct Channels (All Strictly Stacked Vertically) */}
          <div className="lg:col-span-7 border-t border-b border-hairline divide-y divide-divider">
            {/* Email */}
            <div className="py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <EnvelopeSimple size={13} weight="regular" className="text-accent" />
                  <span>{contact.emailLabel}</span>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-display text-2xl sm:text-[1.75rem] text-ink hover:text-accent transition-colors break-all sm:break-normal"
                >
                  {siteConfig.email}
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(siteConfig.email, "email")}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-canvas border border-hairline hover:border-accent rounded-[2px] font-mono text-xs text-ink cursor-pointer min-h-[40px]"
              >
                {copiedField === "email" ? (
                  <>
                    <Check size={14} weight="regular" className="text-accent" />
                    <span className="text-accent font-medium">{t(contact.copiedLabel)}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} weight="regular" className="text-muted" />
                    <span>{t(contact.copyLabel)}</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <Phone size={13} weight="regular" className="text-accent" />
                  <span>{t(contact.phoneLabel)}</span>
                </div>
                <a
                  href={siteConfig.phoneHref}
                  className="font-display text-2xl sm:text-[1.75rem] text-ink hover:text-accent transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleCopy("0971965391", "phone")}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-canvas border border-hairline hover:border-accent rounded-[2px] font-mono text-xs text-ink cursor-pointer min-h-[40px]"
              >
                {copiedField === "phone" ? (
                  <>
                    <Check size={14} weight="regular" className="text-accent" />
                    <span className="text-accent font-medium">{t(contact.copiedLabel)}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} weight="regular" className="text-muted" />
                    <span>{t(contact.copyLabel)}</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub & Optional CV PDF */}
            <div className="py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <Globe size={13} weight="regular" className="text-accent" />
                  <span>{contact.githubLabel}</span>
                </div>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-2xl text-ink hover:text-accent transition-colors"
                >
                  <span>github.com/mranex</span>
                  <ArrowUpRight size={17} weight="regular" className="text-accent" />
                </a>
              </div>

              {siteConfig.cvPdfUrl && (
                <a
                  href={siteConfig.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-solid text-white hover:bg-accent-hover rounded-[2px] font-mono text-xs min-h-[40px]"
                >
                  <FilePdf size={15} weight="regular" />
                  <span>{locale === "vi" ? "Tải CV PDF" : "Download CV PDF"}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Ecosystem Directory */}
          <div className="lg:col-span-5 bg-canvas border border-hairline p-6 flex flex-col justify-between gap-5">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-medium mb-4">
                {t(contact.ecosystemTitle)}
              </div>
              <div className="divide-y divide-divider">
                {contact.ecosystemNodes.map((node) => (
                  <div
                    key={node.label}
                    className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-mono text-sm font-medium text-ink">
                        {node.label}
                      </div>
                      <div className="text-xs text-body">{t(node.role)}</div>
                    </div>
                    <span className="px-2.5 py-1 bg-paper border border-hairline rounded-[2px] font-mono text-[10px] text-muted shrink-0">
                      {t(node.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {siteConfig.draciaPressUrl ? (
              <a
                href={siteConfig.draciaPressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-solid text-white hover:bg-accent-hover rounded-[2px] text-xs font-medium min-h-[40px]"
              >
                <span>{locale === "vi" ? "Mở Dracia Press" : "Open Dracia Press"}</span>
                <ArrowUpRight size={14} weight="regular" />
              </a>
            ) : (
              <p className="font-mono text-[11px] leading-relaxed text-muted pt-2 border-t border-divider">
                {locale === "vi"
                  ? "Liên kết trực tiếp tới tờ báo RSS Dracia Press sẽ kích hoạt tại đây sau khi hoàn tất DNS subdomain."
                  : "Direct link to Dracia Press will activate here once subdomain DNS configuration completes."}
              </p>
            )}
          </div>
        </div>

        {/* Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>{t(contact.colophon)}</p>
          <a href="#top" className="text-accent hover:underline shrink-0">
            {locale === "vi" ? "↑ Về đầu trang" : "↑ Back to top"}
          </a>
        </div>
      </div>
    </footer>
  );
}

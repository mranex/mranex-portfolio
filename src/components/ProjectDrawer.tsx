"use client";

import React, { useEffect } from "react";
import { ArrowUpRight, Check, GitBranch, Info, LockSimple, X } from "@phosphor-icons/react";
import type { ArchiveProject } from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";

export function ProjectDrawer({
  project,
  onClose,
}: {
  project: ArchiveProject | null;
  onClose: () => void;
}) {
  const { locale, t } = useLocale();

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[var(--backdrop)] backdrop-blur-[1px] cursor-pointer"
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
        className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-paper border-l border-hairline shadow-xl overflow-y-auto"
      >
        <div className="p-6 sm:p-8 flex flex-col min-h-full justify-between gap-8">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-hairline">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="font-mono text-xs font-medium text-accent">
                    ARCHIVE {project.code}
                  </span>
                  <span className="text-hairline">·</span>
                  <span className="px-2 py-0.5 bg-tint border border-hairline rounded-[2px] font-mono text-[11px] text-body">
                    {t(project.status)}
                  </span>
                </div>
                <h3
                  id="drawer-project-title"
                  className="font-display text-3xl text-ink tracking-tight"
                >
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-muted mt-1.5">
                  {t(project.subtitle)}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={locale === "vi" ? "Đóng chi tiết dự án" : "Close project dossier"}
                className="w-11 h-11 inline-flex items-center justify-center border border-hairline bg-canvas text-ink hover:border-accent rounded-[2px] cursor-pointer shrink-0"
              >
                <X size={18} weight="regular" />
              </button>
            </div>

            {/* Body */}
            <div className="py-6 space-y-6">
              <p className="text-[15px] text-body leading-[1.75]">
                {t(project.details)}
              </p>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-3">
                  {locale === "vi" ? "Thành phần & tính năng xác nhận" : "Verified Capabilities"}
                </div>
                <ul className="space-y-2.5 border-t border-divider pt-3">
                  {project.features[locale].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-body leading-relaxed"
                    >
                      <Check size={15} weight="regular" className="text-accent shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-3">
                  Stack & Architecture
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-tint border border-hairline rounded-[2px] font-mono text-xs text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.metricsNote && (
                <div className="bg-accent-wash border border-accent-border p-4 flex items-start gap-3 text-xs leading-relaxed text-ink">
                  <Info size={16} weight="regular" className="text-accent shrink-0 mt-0.5" />
                  <span>{t(project.metricsNote)}</span>
                </div>
              )}

              {project.factualNote && (
                <div className="bg-tint border border-hairline p-4 flex items-start gap-3 text-xs leading-relaxed text-body">
                  <LockSimple size={16} weight="regular" className="text-muted shrink-0 mt-0.5" />
                  <span>{t(project.factualNote)}</span>
                </div>
              )}

              {project.roadmapNote && (
                <div className="bg-tint border border-hairline p-4 flex items-start gap-3 text-xs leading-relaxed text-body">
                  <GitBranch size={16} weight="regular" className="text-accent shrink-0 mt-0.5" />
                  <span>{t(project.roadmapNote)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions (Strict Link Integrity) */}
          <div className="pt-5 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-solid text-white hover:bg-accent-hover rounded-[2px] text-xs font-medium transition-colors min-h-[42px]"
                >
                  <span>{locale === "vi" ? "Mở GitHub Repository" : "Open GitHub Repository"}</span>
                  <ArrowUpRight size={14} weight="regular" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper border border-hairline hover:border-accent text-ink rounded-[2px] text-xs font-medium transition-colors min-h-[42px]"
                >
                  <span>{locale === "vi" ? "Truy cập trang trực tiếp" : "Visit Live URL"}</span>
                  <ArrowUpRight size={14} weight="regular" />
                </a>
              )}
              {!project.repoUrl && !project.liveUrl && (
                <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                  <LockSimple size={14} weight="regular" />
                  {project.isPrivateShipped
                    ? locale === "vi"
                      ? "Công cụ hoàn thiện dùng riêng — không phát hành repo/download"
                      : "Private shipped tool — no public repo or download"
                    : locale === "vi"
                      ? "Chưa mở liên kết công khai"
                      : "No public link published yet"}
                </span>
              )}
            </div>

            {project.repoUrl && (
              <span className="font-mono text-[11px] text-muted">
                {project.repoUrl.replace("https://", "")}
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

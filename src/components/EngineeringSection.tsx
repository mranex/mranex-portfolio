"use client";

import React, { useMemo, useState } from "react";
import { ArrowUpRight, Check, FolderOpen, LockSimple } from "@phosphor-icons/react";
import {
  portfolioData,
  type ArchiveCategory,
  type ArchiveProject,
} from "@/data/portfolio";
import { useLocale } from "@/context/LocaleContext";
import { SectionHeader } from "./SectionHeader";
import { ProjectDrawer } from "./ProjectDrawer";

export function EngineeringSection() {
  const { locale, t } = useLocale();
  const { engineering } = portfolioData;
  const { roleplay, writing } = engineering;

  const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>("all");
  const [activeProject, setActiveProject] = useState<ArchiveProject | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return engineering.items;
    return engineering.items.filter((item) => item.category === selectedCategory);
  }, [engineering.items, selectedCategory]);

  return (
    <section
      id="engineering"
      className="py-16 md:py-24 border-t border-hairline bg-section-alt"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t(engineering.eyebrow)}
          title={t(engineering.title)}
          subtitle={t(engineering.subtitle)}
        />

        {/* A. Flagship Software Specifications (Static Print-Grade Engineering Sheets) */}
        <div className="mb-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium mb-6">
            {t(engineering.flagshipHeading)}
          </h3>

          <div className="space-y-8">
            {/* Spec Sheet 01: Roleplay Machine */}
            <article className="bg-paper border border-hairline border-t-2 border-t-accent-solid p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 mb-6 border-b border-divider">
                <div>
                  <span className="font-mono text-xs text-accent font-medium">
                    SYSTEM {roleplay.code}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl text-ink mt-1">
                    {roleplay.name}
                  </h4>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    {t(roleplay.subtitle)}
                  </p>
                </div>
                <span className="px-3 py-1 bg-accent-wash border border-accent-border rounded-[2px] font-mono text-[11px] text-accent font-medium">
                  {roleplay.platform} · {t(roleplay.status)}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-5">
                  <p className="text-sm text-body leading-[1.75]">
                    {t(roleplay.summary)}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {roleplay.modes.map((mode) => (
                      <span
                        key={mode}
                        className="px-2.5 py-1 bg-canvas border border-hairline rounded-[2px] font-mono text-[11px] text-ink"
                      >
                        {mode}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-divider">
                    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted mb-2.5">
                      {t(roleplay.challengesLabel)}
                    </div>
                    <ul className="space-y-2">
                      {roleplay.challenges[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-sm text-body leading-relaxed"
                        >
                          <Check size={14} weight="regular" className="text-accent shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-tint border border-hairline p-3.5 text-xs text-muted leading-relaxed">
                    {t(roleplay.explorationNote)}
                  </div>
                </div>

                {/* Static Flat 5-Tier Architecture Table */}
                <div className="lg:col-span-7 border border-hairline bg-canvas">
                  <div className="px-4 py-2.5 bg-tint border-b border-hairline font-mono text-[11px] uppercase tracking-[0.14em] text-accent font-medium">
                    {t(roleplay.schematicTitle)}
                  </div>
                  <div className="divide-y divide-divider bg-paper">
                    {roleplay.layers.map((layer) => (
                      <div
                        key={layer.code}
                        className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                      >
                        <div className="sm:col-span-4">
                          <span className="font-mono text-xs font-medium text-accent mr-2">
                            {layer.code}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-ink">
                            {layer.name}
                          </span>
                        </div>
                        <p className="sm:col-span-8 text-xs sm:text-[13px] text-body leading-relaxed">
                          {t(layer.summary)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Spec Sheet 02: Writing Machine */}
            <article className="bg-paper border border-hairline border-t-2 border-t-accent-solid p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 mb-6 border-b border-divider">
                <div>
                  <span className="font-mono text-xs text-accent font-medium">
                    SYSTEM {writing.code}
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl text-ink mt-1">
                    {writing.name}
                  </h4>
                  <p className="font-mono text-xs text-muted mt-0.5">
                    {t(writing.subtitle)}
                  </p>
                </div>
                <span className="px-3 py-1 bg-accent-solid text-white rounded-[2px] font-mono text-[11px] font-medium">
                  {writing.platform} · {t(writing.status)}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-body leading-[1.75]">
                    {t(writing.summary)}
                  </p>

                  <div className="bg-accent-wash border border-accent-border p-3.5 text-xs text-ink leading-relaxed">
                    {t(writing.usageNote)}
                  </div>

                  <div className="bg-tint border border-hairline p-3.5 text-xs text-muted leading-relaxed">
                    {t(writing.explorationNote)}
                  </div>
                </div>

                {/* Static Flat 4-Node Workflow & Rewind Schematic */}
                <div className="lg:col-span-7 border border-hairline bg-canvas">
                  <div className="px-4 py-2.5 bg-tint border-b border-hairline font-mono text-[11px] uppercase tracking-[0.14em] text-accent font-medium">
                    {t(writing.schematicTitle)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-hairline bg-paper">
                    {writing.workflowNodes.map((node) => (
                      <div key={node.step} className="p-4 space-y-1.5">
                        <div className="font-mono text-[11px] font-medium text-accent">
                          STEP {node.step}
                        </div>
                        <div className="text-sm font-medium text-ink">
                          {t(node.title)}
                        </div>
                        <p className="text-xs text-body leading-relaxed">
                          {t(node.detail)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* B. Technical Archive Ledger (#03 - #12) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent font-medium">
              {t(engineering.archiveHeading)}
            </h3>

            {/* Rectangular Category Filters */}
            <div
              role="tablist"
              aria-label="Project archive filter"
              className="flex flex-wrap gap-1.5"
            >
              {engineering.categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-[2px] font-mono text-[11px] border transition-colors cursor-pointer min-h-[36px] ${
                      active
                        ? "bg-accent-solid border-accent-solid text-white"
                        : "bg-paper border-hairline text-body hover:border-accent"
                    }`}
                  >
                    {t(cat.label)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-paper border border-hairline divide-y divide-divider">
            {filteredItems.map((project) => (
              <div
                key={project.id}
                className={`p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center transition-colors hover:bg-canvas/70 ${
                  project.highlightEcosystem ? "border-l-[3px] border-l-accent-solid" : ""
                }`}
              >
                <div className="md:col-span-1 font-mono text-xs text-muted">
                  {project.code}
                </div>

                <div className="md:col-span-4">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-left cursor-pointer group focus:outline-none"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xl text-ink group-hover:text-accent transition-colors">
                        {project.name}
                      </span>
                      {project.highlightEcosystem && (
                        <span className="px-2 py-0.5 bg-accent-wash border border-accent-border rounded-[2px] font-mono text-[10px] text-accent">
                          {locale === "vi" ? "mranex.com · RSS Y khoa" : "mranex.com · Medical RSS"}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-muted mt-0.5">
                      {t(project.subtitle)}
                    </p>
                  </button>
                </div>

                <div className="md:col-span-4 space-y-2">
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {t(project.summary)}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-tint border border-divider rounded-[2px] font-mono text-[10px] text-body"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1 font-mono text-[10px] text-muted">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-wrap md:flex-col items-center md:items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-tint border border-hairline rounded-[2px] font-mono text-[10px] text-body">
                    {project.isPrivateShipped && <LockSimple size={11} weight="regular" />}
                    {t(project.status)}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-paper border border-hairline hover:border-accent rounded-[2px] font-mono text-[11px] text-ink min-h-[36px]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight size={12} weight="regular" className="text-accent" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-canvas border border-hairline hover:border-accent hover:text-accent rounded-[2px] font-mono text-[11px] text-ink cursor-pointer min-h-[36px]"
                    >
                      <FolderOpen size={13} weight="regular" />
                      <span>{locale === "vi" ? "Chi tiết" : "Dossier"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

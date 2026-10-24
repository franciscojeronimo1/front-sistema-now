"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Projetos
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Casos que mostram o padrão Sistema Now.
          </h2>
          <p className="text-muted sm:text-lg">
            Em breve links reais. Por enquanto, veja o tipo de entrega que
            fazemos.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => {
            const hasLink = Boolean(project.href);
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col rounded-xl border border-border bg-paper p-6"
              >
                <span className="mb-3 inline-flex w-fit rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.segment}
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {project.summary}
                </p>
                {hasLink ? (
                  <a
                    href={project.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    Ver projeto
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-muted/70">
                    Ver projeto — em breve
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Stethoscope,
  Wheat,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";
import { services } from "@/lib/services";

const icons = [
  MessageSquare,
  Stethoscope,
  Wheat,
  LayoutDashboard,
  RefreshCw,
];

export function Services() {
  return (
    <section id="servicos" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Serviços
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pacotes objetivos, prazo claro, resultado no ar.
          </h2>
          <p className="text-muted sm:text-lg">
            Escolha o que faz sentido pro seu negócio — ou fale com a gente pra
            montar o escopo certo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] ?? MessageSquare;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${
                  index === services.length - 1 && services.length % 2 === 1
                    ? "md:col-span-2 md:max-w-xl md:justify-self-center"
                    : ""
                }`}
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      Prazo típico: {service.deadline}
                    </p>
                  </div>
                </div>
                <dl className="space-y-3 text-sm leading-relaxed sm:text-base">
                  <div>
                    <dt className="font-semibold text-ink">Pra quem</dt>
                    <dd className="text-muted">{service.forWho}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">O que você ganha</dt>
                    <dd className="text-muted">{service.gains}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Resultado</dt>
                    <dd className="text-muted">{service.result}</dd>
                  </div>
                </dl>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

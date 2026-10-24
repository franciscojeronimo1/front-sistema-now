"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa rápida",
    text: "Entendemos seu negócio e o que precisa vender ou organizar.",
  },
  {
    icon: FileText,
    title: "Proposta clara",
    text: "Escopo, prazo e valor, sem surpresa.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    text: "Site, app ou sistema no ar, com treino se precisar.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte",
    text: "Plano mensal pra manter e melhorar.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Como funciona
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Do primeiro contato ao suporte — simples e direto.
          </h2>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative rounded-xl border border-border bg-surface p-5"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-paper">
                  {index + 1}
                </span>
                <div className="mb-3 inline-flex text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Sobre
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Feito pro negócio real — sem projeto eterno.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              A Sistema Now nasceu pra resolver um problema simples: muita
              empresa ainda perde venda porque não tem presença digital clara,
              processo organizado ou um sistema que acompanhe o dia a dia.
            </p>
            <p>
              A gente cria sites, apps e sistemas pensados pro negócio real —
              loja, clínica, produção, campo ou serviço. Sem projeto eterno. Sem
              linguagem complicada. Você entende o que está comprando, o prazo e
              o resultado.
            </p>
            <p>
              Trabalhamos com pacotes objetivos e manutenção mensal, pra sua
              operação continuar rodando depois da entrega. Atendemos em várias
              regiões do Brasil, com o mesmo padrão: rápido, claro e feito pra
              gerar resultado.
            </p>
          </div>

          <blockquote className="rounded-xl border-l-4 border-accent bg-paper px-5 py-4 text-base font-medium leading-relaxed text-ink sm:text-lg">
            Somos a Sistema Now: sites, apps e sistemas pra empresas que querem
            vender mais e operar melhor — agora.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(15,159,138,0.18),transparent_55%),linear-gradient(180deg,#e8eef2_0%,#f4f6f8_55%,#f4f6f8_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Sistema Now
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Tecnologia que faz sua empresa vender mais.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Sites, apps e sistemas sob medida — do comércio local à operação
            completa. Entrega rápida, suporte contínuo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton label="Falar no WhatsApp" variant="whatsapp" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-base font-semibold text-ink transition-colors hover:border-ink/20 hover:bg-paper"
            >
              Ver serviços
            </a>
          </div>
          <p className="text-sm text-muted">
            Sistema Now — do pedido à entrega, do site ao sistema.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          aria-hidden="true"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-ink shadow-2xl shadow-ink/20 sm:aspect-[5/4] lg:aspect-[4/5]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,159,138,0.45),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="absolute inset-6 flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:inset-8 sm:p-6">
              <div className="space-y-3">
                <div className="h-2 w-24 rounded-full bg-accent/80" />
                <div className="h-3 w-3/4 max-w-[12rem] rounded-full bg-white/25" />
                <div className="h-3 w-1/2 max-w-[8rem] rounded-full bg-white/15" />
              </div>
              <div className="space-y-3">
                {[
                  { label: "Pedido #1842", status: "Em produção" },
                  { label: "Novo lead", status: "WhatsApp" },
                  { label: "Agenda", status: "3 hoje" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-3 py-2.5"
                  >
                    <span className="text-sm font-medium text-white/90">
                      {row.label}
                    </span>
                    <span className="rounded-md bg-accent/90 px-2 py-0.5 text-xs font-semibold text-white">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-display text-sm font-semibold text-white/70">
                Do pedido à entrega — no celular.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

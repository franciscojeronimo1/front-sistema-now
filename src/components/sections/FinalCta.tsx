"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,#0b1220_0%,#0f3d38_55%,#0f9f8a_140%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto pra colocar sua empresa no digital de verdade?
          </h2>
          <p className="text-lg text-white/80">
            Fale com a Sistema Now e receba uma proposta objetiva pro seu caso.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton label="Chamar no WhatsApp" variant="whatsapp" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

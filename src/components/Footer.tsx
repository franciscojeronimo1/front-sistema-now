import { Logo } from "@/components/Logo";
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-3">
          <Logo variant="dark" />
          <p className="text-sm leading-relaxed text-paper/70">
            Sites, apps e sistemas pra empresas que querem vender mais e operar
            melhor — agora.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-paper">Contato</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-paper/80 transition-colors hover:text-accent"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div className="space-y-2 text-sm lg:text-right">
          <p className="font-semibold text-paper">Navegação</p>
          <div className="flex flex-col gap-1 lg:items-end">
            <a href="#servicos" className="text-paper/80 hover:text-accent">
              Serviços
            </a>
            <a href="#projetos" className="text-paper/80 hover:text-accent">
              Projetos
            </a>
            <a href="#como-funciona" className="text-paper/80 hover:text-accent">
              Como funciona
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-paper/50 sm:px-6 lg:px-8">
          © 2026 Sistema Now. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

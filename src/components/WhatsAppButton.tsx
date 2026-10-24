import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "whatsapp" | "floating";
  className?: string;
  message?: string;
};

const variants: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-accent/25",
  secondary:
    "bg-surface text-ink border border-border hover:border-ink/20 hover:bg-paper",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-95 hover:scale-[1.02] active:scale-[0.98] shadow-sm",
  floating:
    "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/20 hover:brightness-95 hover:scale-105 active:scale-95 transition-transform md:bottom-8 md:right-8",
};

export function WhatsAppButton({
  label,
  variant = "whatsapp",
  className = "",
  message,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message);

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variants.floating} ${className}`}
        aria-label={label}
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}

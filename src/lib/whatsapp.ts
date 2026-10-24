export const WHATSAPP_NUMBER = "553599312337";
export const WHATSAPP_DISPLAY = "+55 35 9931-2337";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Sistema Now e quero uma proposta.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

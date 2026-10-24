export type Project = {
  id: string;
  title: string;
  segment: string;
  summary: string;
  /** Quando tiver o link real, preencha aqui. Enquanto for null, o botão fica desabilitado. */
  href: string | null;
};

export const projects: Project[] = [
  {
    id: "projeto-comercio",
    title: "Catálogo + WhatsApp para loja local",
    segment: "Comércio",
    summary:
      "Mini site, QR na vitrine e catálogo no WhatsApp para o cliente achar e comprar mais rápido.",
    href: null,
  },
  {
    id: "projeto-clinica",
    title: "Agenda online para clínica",
    segment: "Saúde",
    summary:
      "Página profissional com agendamento e lembretes — menos falta e mais retorno de pacientes.",
    href: null,
  },
  {
    id: "projeto-agro",
    title: "Pedidos organizados para produção",
    segment: "Agro",
    summary:
      "Catálogo com unidades e preços e fluxo de pedido claro, sem mensagem perdida.",
    href: null,
  },
  {
    id: "projeto-sistema",
    title: "Painel de pedidos sob medida",
    segment: "Operação",
    summary:
      "Sistema web no celular para status, prazo e relatórios simples da produção.",
    href: null,
  },
];

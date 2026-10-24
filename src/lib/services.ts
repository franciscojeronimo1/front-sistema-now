export type Service = {
  id: string;
  title: string;
  forWho: string;
  gains: string;
  result: string;
  deadline: string;
};

export const services: Service[] = [
  {
    id: "comercio-whatsapp",
    title: "Comércio no WhatsApp",
    forWho:
      "Lojas, salões, padarias, pet shops, óticas, oficinas e comércios em geral.",
    gains:
      "Catálogo no WhatsApp, Google Meu Negócio otimizado, mini site e QR na vitrine.",
    result: "Cliente te acha, vê o produto e chama pra comprar.",
    deadline: "5 a 7 dias",
  },
  {
    id: "clinica-consultorio",
    title: "Clínica e consultório",
    forWho:
      "Dentistas, estética, fisioterapia, psicologia, nutrição, veterinária e afins.",
    gains:
      "Página profissional, agendamento online, lembretes no WhatsApp e presença no Google.",
    result: "Menos falta, mais agenda organizada e mais retorno de pacientes.",
    deadline: "10 a 14 dias",
  },
  {
    id: "agro-producao",
    title: "Agro e produção",
    forWho:
      "Produtores, revendas, hortifruti e negócios que vendem por pedido.",
    gains:
      "Catálogo com unidades e preços, fluxo de pedido organizado e página institucional.",
    result: "Menos mensagem perdida, pedido mais claro, venda mais profissional.",
    deadline: "14 a 21 dias",
  },
  {
    id: "sistemas-sob-medida",
    title: "Sistemas sob medida",
    forWho: "Facções, confecções, operações com pedido, status e prazo.",
    gains:
      "Sistema web no celular pra acompanhar pedidos, status e relatórios simples.",
    result:
      "Controle do que está em produção — sem depender só de planilha ou ligação.",
    deadline: "Conforme o escopo (MVP em semanas, não em meses)",
  },
  {
    id: "manutencao-crescimento",
    title: "Manutenção e crescimento mensal",
    forWho:
      "Quem já tem site ou sistema conosco (ou quer suporte contínuo).",
    gains:
      "Hospedagem, ajustes, acompanhamento e evolução do que já foi entregue.",
    result:
      "Sua presença digital não “morre” depois da entrega — continua gerando retorno.",
    deadline: "Plano mensal contínuo",
  },
];

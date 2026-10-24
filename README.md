# Sistema Now — Site institucional

Landing page da Sistema Now: sites, apps e sistemas para empresas.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Conteúdo editável

- Serviços: `src/lib/services.ts`
- Projetos (links): `src/lib/projects.ts` — preencha `href` quando tiver o link
- WhatsApp: `src/lib/whatsapp.ts`

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste a URL pública:

```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

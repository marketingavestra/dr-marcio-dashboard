# Dashboard — Dr. Márcio Rabello
**Avestra · Automação Empresarial**

Painel completo de métricas, segundo cérebro, roadmap e projeções do projeto.

---

## Rodar localmente

```bash
cd clientes/dr-marcio-rabello/08-painel/dashboard-avestra
npm install
npm run dev
```

Acesse: http://localhost:3000

## Deploy (Vercel)

```bash
# Instalar Vercel CLI (se necessário)
npm i -g vercel

# Deploy
vercel --prod
```

Ou use a skill `/deploy` no Claude Code.

---

## Estrutura

```
app/
  layout.js       ← Root layout + fonts
  page.js         ← Página principal
  globals.css     ← Design system completo
components/
  Nav             ← Navbar sticky com links âncora
  Hero            ← Apresentação do Dr. Márcio + score card
  MetricsBar      ← 4 métricas rápidas
  InstagramPanel  ← Diagnóstico Instagram + gauge
  SegundoCerebro  ← 14 tópicos, 5 pilares, 4 fronteiras, 2 hubs
  Roadmap         ← 4 fases com checklists de progresso
  ConteudoPlanning← Calendário editorial + pilares + ideias
  Projecao        ← Cenários de engajamento + timeline
  SEOPanel        ← Google Ads, SEO Local, Blog
  Produtos        ← Portfólio + sazonalidade + público
  Footer          ← Contatos Avestra + Dr. Márcio
```

---

## Cliente

- **Dr. Márcio Rabello** — Médico especialista em emagrecimento
- Curitiba – PR | CRM PR 27.529
- Instagram: @drmarciorabello (18.670 seguidores)
- Site: drmarciorabello.com

## Gestão

- **Avestra** — Automação Empresarial
- CNPJ: 66.309.977/0001-01
- Início do projeto: 13 de Maio de 2026

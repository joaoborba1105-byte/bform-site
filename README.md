# BFORM — Landing Page

Landing page premium da BFORM, construída em **Next.js 14** (App Router), pronta para deploy no **GitHub + Vercel**.

## Stack

- Next.js 14 (App Router)
- React 18
- CSS puro (variáveis CSS, sem framework de UI)
- next/font (Space Grotesk, Inter, JetBrains Mono) — sem chamadas externas ao Google Fonts em runtime
- next/image para otimização automática de imagens

## Estrutura do projeto

```
bform-site/
├── app/
│   ├── layout.js        # Layout raiz, fontes e metadata (SEO/OpenGraph)
│   ├── page.js          # Página única, monta todas as seções
│   └── globals.css      # Design system completo (cores, tipografia, componentes)
├── components/
│   ├── Header.jsx        # Nav fixo, com scroll state e menu mobile
│   ├── Hero.jsx          # Seção hero com scan-line e readouts
│   ├── Manifesto.jsx     # Seção "O Método"
│   ├── Pillars.jsx       # 5 pilares da metodologia
│   ├── Process.jsx       # "Como Funciona" (5 etapas)
│   ├── Science.jsx       # Metodologia científica + stats
│   ├── Audience.jsx      # "Para Quem é a BFORM"
│   ├── Results.jsx       # Métricas de resultado
│   ├── Coach.jsx         # Sobre o coach
│   ├── FAQ.jsx           # Perguntas frequentes (accordion)
│   ├── CTAFinal.jsx      # Chamada final para ação
│   ├── Footer.jsx         # Rodapé
│   └── RevealInit.jsx    # Observer de scroll-reveal (client-only)
├── public/
│   └── images/
│       ├── logo.jpg
│       └── coach.jpg
├── package.json
├── next.config.js
├── jsconfig.json          # alias "@/*" para a raiz do projeto
├── vercel.json
├── .eslintrc.json
└── .gitignore
```

## Instalação local

Pré-requisitos: **Node.js 18.18+** e **npm** (ou yarn/pnpm).

```bash
# 1. Entre na pasta do projeto
cd bform-site

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev
```

O site abre em `http://localhost:3000`.

## Build de produção (teste local)

```bash
npm run build
npm run start
```

## Deploy no GitHub

```bash
cd bform-site
git init
git add .
git commit -m "Initial commit — BFORM landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/bform-site.git
git push -u origin main
```

## Deploy no Vercel

**Opção A — via dashboard (recomendado):**

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório do GitHub criado acima
3. O Vercel detecta automaticamente o framework Next.js (config já incluída em `vercel.json`)
4. Clique em **Deploy** — nenhuma variável de ambiente é necessária

**Opção B — via CLI:**

```bash
npm i -g vercel
cd bform-site
vercel        # deploy de preview
vercel --prod # deploy de produção
```

## Domínio próprio (bform.com.br)

Após o primeiro deploy:

1. No dashboard do projeto na Vercel, vá em **Settings → Domains**
2. Adicione `bform.com.br` e `www.bform.com.br`
3. Configure no seu provedor de DNS os registros indicados pela Vercel (geralmente um `A` para `76.76.21.21` e um `CNAME` para `cname.vercel-dns.com` no `www`)
4. Aguarde a propagação (pode levar até algumas horas)

## Editando conteúdo

- **Textos**: cada seção é um componente isolado em `components/`. Os textos ficam como JSX direto ou em arrays no topo do arquivo (ex.: `PILLARS`, `FAQS`, `RESULTS`).
- **Cores e tipografia**: tudo centralizado em `app/globals.css`, no bloco `:root` (variáveis `--gold`, `--black`, `--display`, etc.).
- **Imagens**: substitua os arquivos em `public/images/` mantendo os mesmos nomes, ou atualize os `import` correspondentes em `Header.jsx`, `Hero.jsx`, `Coach.jsx` e `Footer.jsx`.
- **WhatsApp/links**: o número está centralizado como `WHATSAPP_URL` no topo de `Header.jsx`, `Hero.jsx` e `CTAFinal.jsx`.

## Notas técnicas

- O site é 100% estático em tempo de execução (nenhuma API, nenhum banco de dados) — o custo de hospedagem na Vercel fica no plano gratuito (Hobby) para este volume de tráfego.
- `next/image` gera automaticamente versões AVIF/WebP e redimensionadas das imagens — não é necessário otimizar os arquivos manualmente.
- Estrutura preparada para expansão futura: basta criar novas rotas em `app/` (ex.: `app/blog/page.js`) ou plugar um CMS/CRM mais adiante.

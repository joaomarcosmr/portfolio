# Informações do package.json

## Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
- Inicia o servidor de desenvolvimento
- Hot reload automático
- Acesse em http://localhost:3000

### Build de Produção
```bash
npm run build
```
- Cria uma versão otimizada para produção
- Minifica arquivos
- Otimiza imagens e assets

### Servidor de Produção
```bash
npm run start
```
- Inicia o servidor de produção
- Requer build prévio (`npm run build`)

### Linting
```bash
npm run lint
```
- Verifica erros de código
- Aplica regras do ESLint
- Mostra warnings e errors

## Dependências Principais

### Framework & Runtime
- **next**: ^16.0.7 - Framework React
- **react**: ^19.0.0 - Biblioteca UI
- **react-dom**: ^19.0.0 - DOM para React
- **typescript**: ^5 - Tipagem estática

### Estilização
- **tailwindcss**: ^4.0.0 - CSS utility-first
- **@tailwindcss/postcss**: ^4.0.0 - PostCSS plugin

### Animações
- **framer-motion**: ^12+ - Animações React
- **@react-three/fiber**: ^8+ - Three.js em React
- **@react-three/drei**: ^9+ - Helpers Three.js
- **three**: ^0.171+ - Biblioteca 3D
- **@tsparticles/react**: ^3+ - Partículas animadas
- **@tsparticles/slim**: ^3+ - Versão slim

### Utilidades
- **lucide-react**: ^0.468+ - Ícones
- **react-hook-form**: ^7+ - Formulários
- **@emailjs/browser**: ^4+ - Envio de emails
- **react-intersection-observer**: ^9+ - Detecção de viewport

## Estrutura do Projeto

```
portfolio/
├── app/                    # App Router Next.js
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── loading.tsx        # Loading state
│   ├── manifest.ts        # PWA manifest
│   ├── robots.txt         # SEO robots
│   └── sitemap.ts         # SEO sitemap
├── components/            # Componentes React
│   ├── sections/         # Seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── animations/       # Componentes animação
│   │   ├── ParticlesBackground.tsx
│   │   ├── Scene3D.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── FloatingCard.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── TextReveal.tsx
│   │   └── AnimatedCounter.tsx
│   ├── Navbar.tsx        # Navegação
│   ├── Footer.tsx        # Rodapé
│   └── LoadingSpinner.tsx # Loading
├── lib/                   # Utilitários
│   ├── animations.ts     # Variantes Framer
│   ├── constants.ts      # Conteúdo do site
│   └── emailService.ts   # Serviço de email
├── public/               # Assets estáticos
├── tailwind.config.ts    # Config Tailwind
├── next.config.ts        # Config Next.js
├── tsconfig.json         # Config TypeScript
└── README.md             # Documentação
```

## Variáveis de Ambiente

Crie `.env.local` na raiz:

```env
# EmailJS (Opcional - para formulário de contato)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Performance

### Otimizações Incluídas
- ✅ Lazy loading de componentes
- ✅ Image optimization (next/image)
- ✅ Code splitting automático
- ✅ Minificação de assets
- ✅ Compression gzip/brotli
- ✅ Font optimization

### Lighthouse Score Esperado
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Build Local
```bash
npm run build
npm run start
```

## Troubleshooting

### Erro ao instalar
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 em uso
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### Build falha
```bash
# Limpar cache
rm -rf .next
npm run build
```

## Atualizações

### Atualizar dependências
```bash
npm update
```

### Verificar outdated
```bash
npm outdated
```

## Suporte

Para mais informações:
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion





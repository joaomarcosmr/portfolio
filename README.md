# Portfolio Moderno - Full-Stack Developer

Um portfólio moderno, responsivo e altamente animado construído com as tecnologias mais recentes do mercado.

## 🚀 Tecnologias

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **3D:** React Three Fiber + Three.js
- **Partículas:** TSParticles
- **Ícones:** Lucide React
- **Formulário:** React Hook Form + EmailJS

## ✨ Features

- ✅ Design moderno e responsivo
- ✅ Animações suaves e profissionais
- ✅ Efeitos 3D interativos
- ✅ Background animado com partículas
- ✅ Scroll suave e parallax
- ✅ Dark mode automático
- ✅ SEO otimizado
- ✅ Formulário de contato funcional
- ✅ Performance otimizada
- ✅ Totalmente tipado com TypeScript

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Personalização

### 1. Conteúdo

Edite o arquivo `lib/constants.ts` para personalizar:
- Informações pessoais
- Projetos
- Habilidades
- Depoimentos
- Links sociais

### 2. Cores e Tema

Edite o arquivo `tailwind.config.ts` para personalizar as cores do tema.

### 3. Animações

As animações podem ser personalizadas em `lib/animations.ts`.

### 4. Email (EmailJS)

Para configurar o envio de emails:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template
4. Copie `.env.local.example` para `.env.local`
5. Adicione suas credenciais do EmailJS

```bash
cp .env.local.example .env.local
```

## 📱 Seções

- **Hero:** Apresentação inicial com partículas animadas
- **About:** Sobre mim e experiência profissional
- **Projects:** Portfólio de projetos
- **Skills:** Habilidades e tecnologias
- **Testimonials:** Depoimentos de clientes
- **Contact:** Formulário de contato

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

Ou conecte seu repositório GitHub diretamente no [Vercel Dashboard](https://vercel.com).

### Outras Plataformas

- **Netlify:** Suporte completo para Next.js
- **Railway:** Deploy com Docker
- **Digital Ocean:** VPS com PM2

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar erros
```

## 📝 Estrutura de Pastas

```
portfolio/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── sections/         # Seções da página
│   └── animations/       # Componentes de animação
├── lib/                   # Utilitários e helpers
│   ├── animations.ts     # Variantes de animação
│   ├── constants.ts      # Constantes e conteúdo
│   └── emailService.ts   # Serviço de email
├── public/               # Arquivos estáticos
└── tailwind.config.ts    # Configuração do Tailwind
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido com ❤️ por [Seu Nome]

- Website: [seusite.com](https://seusite.com)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
# portfolio

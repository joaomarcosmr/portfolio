# Guia de Configuração do Portfolio

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git

## 🛠️ Instalação Passo a Passo

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Copie o arquivo de exemplo:

```bash
cp .env.local.example .env.local
```

### 4. Configure o EmailJS (Opcional mas Recomendado)

Para que o formulário de contato funcione:

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita
2. No dashboard, clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure o serviço seguindo as instruções
5. Vá para "Email Templates" e crie um novo template
6. Use estas variáveis no template:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem
   - `{{to_name}}` - Seu nome
7. Copie as credenciais para o `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 5. Personalize seu Conteúdo

Edite o arquivo `lib/constants.ts` e personalize:

- **ABOUT_INFO:** Suas informações pessoais
- **PROJECTS:** Seus projetos (adicione/remova conforme necessário)
- **TECH_STACK:** Suas habilidades técnicas
- **TESTIMONIALS:** Depoimentos de clientes
- **SOCIAL_LINKS:** Seus links de redes sociais

### 6. Personalize as Cores (Opcional)

Edite `tailwind.config.ts` para mudar as cores primárias e de accent:

```typescript
colors: {
  primary: {
    // Suas cores aqui
  },
  accent: {
    // Suas cores aqui
  },
}
```

### 7. Adicione suas Imagens

Substitua as imagens placeholder:

- Adicione sua foto em `public/images/profile.jpg`
- Adicione screenshots dos seus projetos em `public/images/projects/`
- Atualize os caminhos em `lib/constants.ts`

### 8. Rode o Projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy

### Deploy na Vercel (Recomendado)

1. Faça push do seu código para GitHub
2. Acesse [Vercel](https://vercel.com)
3. Clique em "Import Project"
4. Selecione seu repositório
5. Configure as variáveis de ambiente
6. Clique em "Deploy"

### Deploy Alternativo

- **Netlify:** Conecte seu repositório GitHub
- **Railway:** Use o template Next.js
- **Digital Ocean:** Deploy com Docker

## 📝 Checklist Pós-Instalação

- [ ] Personalizei todas as informações em `constants.ts`
- [ ] Configurei o EmailJS
- [ ] Adicionei minhas próprias imagens
- [ ] Atualizei as cores do tema
- [ ] Testei o formulário de contato
- [ ] Verifiquei a responsividade em diferentes dispositivos
- [ ] Atualizei os links das redes sociais
- [ ] Substitui o conteúdo placeholder
- [ ] Adicionei meus projetos reais
- [ ] Configurei o domínio personalizado

## 🐛 Problemas Comuns

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Animações não funcionando

Certifique-se de que o Framer Motion está instalado:

```bash
npm install framer-motion
```

### Formulário não envia

1. Verifique se as variáveis de ambiente estão corretas
2. Verifique o console do navegador para erros
3. Teste com o modo de simulação primeiro

## 💡 Dicas

- Use imagens otimizadas (WebP quando possível)
- Mantenha os projetos atualizados
- Adicione Google Analytics para rastrear visitas
- Configure um domínio personalizado
- Atualize regularmente o conteúdo

## 📞 Suporte

Se encontrar problemas:
1. Verifique a documentação do Next.js
2. Consulte os issues no GitHub
3. Entre em contato através do formulário

## 🎉 Pronto!

Seu portfolio está configurado e pronto para impressionar! 🚀




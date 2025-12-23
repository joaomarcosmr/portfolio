# Guia de Customização

## 🎨 Personalizando o Portfolio

### 1. Conteúdo

Todas as informações do site estão centralizadas em `lib/constants.ts`.

#### Informações Pessoais

```typescript
export const ABOUT_INFO = {
  name: "Seu Nome Aqui",
  role: "Seu Cargo",
  description: `Sua descrição...`,
  highlights: [
    "Destaque 1",
    "Destaque 2",
    // ...
  ],
};
```

#### Projetos

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição breve",
    image: "URL da imagem",
    tags: ["Tag1", "Tag2"],
    link: "https://projeto.com",
    github: "https://github.com/usuario/repo",
  },
  // Adicione mais projetos...
];
```

#### Habilidades

```typescript
export const TECH_STACK = [
  { name: "React", icon: "⚛️" },
  // Adicione suas tecnologias...
];
```

### 2. Cores e Tema

Edite `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Gradiente de azul por padrão
        50: "#f0f9ff",
        500: "#0ea5e9",
        // Altere para suas cores
      },
    },
  },
}
```

#### Paletas Sugeridas

**Roxo Moderno:**
```typescript
primary: {
  500: "#8b5cf6", // Roxo
}
```

**Verde Tech:**
```typescript
primary: {
  500: "#10b981", // Verde
}
```

**Laranja Vibrante:**
```typescript
primary: {
  500: "#f97316", // Laranja
}
```

### 3. Animações

Personalize em `lib/animations.ts`:

```typescript
// Velocidade das animações
export const fadeIn = (direction, delay = 0) => {
  return {
    // Ajuste duration para mais rápido/lento
    transition: {
      duration: 1.2, // Padrão: 1.2s
    },
  };
};
```

### 4. Partículas

Configure em `components/animations/ParticlesBackground.tsx`:

```typescript
particles: {
  number: {
    value: 80, // Quantidade de partículas
  },
  color: {
    value: "#0ea5e9", // Cor das partículas
  },
  // ...
}
```

### 5. Fontes

Troque a fonte em `app/layout.tsx`:

```typescript
import { Inter, Poppins, Montserrat } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
```

### 6. Hero Section

Personalize em `components/sections/Hero.tsx`:

- Mude o texto de apresentação
- Ajuste as cores dos gradientes
- Modifique os botões de CTA

### 7. Adicionar Nova Seção

1. Crie o componente em `components/sections/NovaSec ao.tsx`
2. Importe em `app/page.tsx`
3. Adicione ao nav em `lib/constants.ts`

```typescript
// lib/constants.ts
export const NAV_LINKS = [
  // ...
  { name: "Nova Seção", href: "#nova-secao" },
];
```

### 8. Remover Seção

1. Remova a importação de `app/page.tsx`
2. Remova do `NAV_LINKS` em `lib/constants.ts`

### 9. Estilo dos Cards

Ajuste em `app/globals.css`:

```css
.card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 
         transition-all duration-300 hover:shadow-2xl;
  /* Customize aqui */
}
```

### 10. Dark Mode

O dark mode é automático, mas você pode forçar um tema editando classes:

```typescript
// Forçar dark mode
<html lang="pt-BR" className="dark">

// Forçar light mode
<html lang="pt-BR" className="light">
```

### 11. Botões

Personalize em `app/globals.css`:

```css
.btn-primary {
  @apply px-6 py-3 bg-primary-600 text-white rounded-lg;
  /* Customize: tamanho, cor, bordas, etc */
}
```

### 12. Rodapé

Edite `components/Footer.tsx` para mudar:
- Links sociais
- Texto de copyright
- Layout das colunas

### 13. Navbar

Personalize em `components/Navbar.tsx`:
- Logo
- Comportamento do scroll
- Estilo mobile

### 14. Imagens

Use Next Image para otimização:

```typescript
<Image
  src="/sua-imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
  quality={90}
  priority // Para imagens above the fold
/>
```

### 15. Meta Tags e SEO

Edite em `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Seu Nome | Cargo",
  description: "Sua descrição",
  keywords: ["palavra1", "palavra2"],
  // ...
};
```

## 🎯 Dicas de Customização

1. **Mantenha Consistência:** Use as mesmas cores e espaçamentos
2. **Performance:** Otimize imagens antes de adicionar
3. **Responsividade:** Teste em diferentes dispositivos
4. **Acessibilidade:** Mantenha bom contraste de cores
5. **Conteúdo:** Seja conciso e objetivo

## 🚀 Próximos Passos

- Adicione Google Analytics
- Configure um blog com MDX
- Adicione mais animações personalizadas
- Crie páginas individuais para projetos
- Adicione um tema switcher manual

## 📚 Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [Color Palette Generator](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)




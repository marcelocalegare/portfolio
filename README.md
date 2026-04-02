# 🚀 Marcelo Calegare — Portfolio

Landing page profissional de **Marcelo Calegare**, desenvolvedor back-end com foco em **Java** e **Python**.

> 🌐 [English version below](#-english)

---

## 📋 Sobre o Projeto

Este portfólio foi desenvolvido como uma página estática moderna para apresentar meu perfil profissional, habilidades técnicas, projetos em destaque e formas de contato. O design prioriza clareza, elegância visual e uma experiência fluida em qualquer dispositivo.

## ✨ Funcionalidades

- **Design responsivo** — Adaptação completa para desktop, tablet e dispositivos móveis
- **Troca de idioma (PT-BR / EN-US)** — Alternância dinâmica de todo o conteúdo da página com persistência via `localStorage`
- **Navegação suave** — Scroll suave entre seções com indicador de progresso de leitura
- **Animações de revelação** — Elementos surgem com animações ao entrar na viewport (via `IntersectionObserver`)
- **Menu mobile** — Navegação hambúrguer com animação de abertura/fechamento
- **Link ativo** — Destaque automático da seção atual na barra de navegação
- **Acessibilidade** — Skip link, suporte a `prefers-reduced-motion` e atributos ARIA

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilização, animações, responsividade e glassmorphism |
| **JavaScript (Vanilla)** | Interatividade, i18n e manipulação do DOM |
| **Google Fonts** | Tipografia (Sora, Manrope, JetBrains Mono) |

## 📁 Estrutura do Projeto

```
📂 Playground/
├── 📄 index.html          # Página principal
├── 📄 styles.css           # Estilos e responsividade
├── 📄 script.js            # Lógica, animações e i18n
├── 📄 README.md            # Este arquivo
└── 📂 assets/
    └── 📂 images/
        └── 🖼️ marcelo-calegare.jpg  # Foto de perfil
```

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marcelocalegare/portfolio.git
   ```

2. **Abra o arquivo `index.html`** diretamente no navegador, ou utilize um servidor local:
   ```bash
   # Com a extensão Live Server do VS Code
   # Ou com Python:
   python -m http.server 8000
   ```

3. **Pronto!** O site estará disponível em `http://localhost:8000`

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints para:

- **Desktop** (> 1080px) — Layout em grid com duas colunas
- **Tablet** (≤ 1080px) — Reorganização dos grids para menos colunas
- **Mobile** (≤ 820px) — Menu hambúrguer, layout em coluna única
- **Mobile pequeno** (≤ 560px) — Botões full-width, espaçamentos reduzidos
- **Telas compactas** (≤ 380px) — Tipografia ajustada para telas muito pequenas

## 🌐 Internacionalização (i18n)

O site suporta dois idiomas:
- 🇧🇷 **Português (PT-BR)** — Idioma padrão
- 🇺🇸 **English (EN-US)**

A troca é feita pelo seletor **PT | EN** no canto superior direito do cabeçalho. A preferência do usuário é salva no `localStorage` e persistida entre visitas.

## 📬 Contato

- **E-mail:** [marcelocalegaredev@gmail.com](mailto:marcelocalegaredev@gmail.com)
- **GitHub:** [github.com/marcelocalegare](https://github.com/marcelocalegare)
- **LinkedIn:** [linkedin.com/in/marcelo-calegare](https://www.linkedin.com/in/marcelo-calegare/)

---

## 🇺🇸 English

### About

Professional portfolio landing page for **Marcelo Calegare**, a back-end developer focused on **Java** and **Python**. Built with pure HTML, CSS, and JavaScript — no frameworks or dependencies.

### Features

- Fully responsive design (desktop, tablet, mobile)
- Dynamic language switching (PT-BR ↔ EN-US) with localStorage persistence
- Smooth scroll navigation with reading progress indicator
- Reveal animations on scroll (IntersectionObserver)
- Mobile hamburger menu with open/close animation
- Active section highlighting in navigation
- Accessibility support (skip link, reduced motion, ARIA attributes)

### Quick Start

```bash
git clone https://github.com/marcelocalegare/portfolio.git
cd portfolio
# Open index.html in your browser
```

---

<p align="center">
  <strong>© 2026 Marcelo Calegare</strong><br>
  Feito com dedicação e foco em evolução contínua.
</p>

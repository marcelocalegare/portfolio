const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const progressBar = document.getElementById("reading-progress-bar");
const currentYear = document.getElementById("current-year");
const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
const sections = [...document.querySelectorAll("main section[id]")];

// ===========================
// Year
// ===========================
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// ===========================
// Mobile Nav Toggle
// ===========================
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", event => {
    if (event.target instanceof HTMLAnchorElement) {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ===========================
// Reading Progress
// ===========================
const updateProgress = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
};

// ===========================
// Active Link Highlight
// ===========================
const setActiveLink = () => {
  const offset = window.scrollY + 120;
  let currentSection = sections[0]?.id;

  for (const section of sections) {
    if (offset >= section.offsetTop) {
      currentSection = section.id;
    }
  }

  navLinks.forEach(link => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", isActive);
  });
};

// ===========================
// Reveal Observer
// ===========================
if (revealItems.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealItems.forEach(item => observer.observe(item));
}

// ===========================
// Scroll & Resize Events
// ===========================
window.addEventListener("scroll", () => {
  updateProgress();
  setActiveLink();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

updateProgress();
setActiveLink();

// ===========================
// i18n — Language Switcher
// ===========================
const translations = {
  pt: {
    skip_link: "Pular para o conteúdo principal",
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_trajectory: "Trajetória",
    nav_education: "Formação",
    nav_contact: "Contato",
    hero_eyebrow: "Disponível para oportunidades",
    hero_lead: "Desenvolvedor Back-End com foco em Java e Python",
    hero_description: "Construo soluções claras, funcionais e orientadas à prática, com foco em desenvolvimento back-end, APIs, automações e evolução contínua da base técnica.",
    hero_cta_projects: "Ver projetos",
    hero_cta_contact: "Entrar em contato",
    hero_hl1_title: "Foco principal",
    hero_hl1_desc: "Back-end, APIs e automação",
    hero_hl2_title: "Stack atual",
    hero_hl2_desc: "Java, Python, PostgreSQL e Docker",
    hero_hl3_title: "Base",
    hero_hl3_desc: "São Paulo, Brasil",
    about_eyebrow: "Sobre mim",
    about_heading: "Clareza técnica, evolução constante e foco em entrega",
    about_p1: "Sou um desenvolvedor com foco em back-end, dedicado a construir aplicações objetivas, bem estruturadas e úteis para problemas reais.",
    about_p2: "Minha atuação está concentrada em Java e Python, com interesse em APIs, bancos de dados, automação e fundamentos de cloud e infraestrutura. Valorizo código limpo, aprendizado constante e projetos que reforcem tanto a base técnica quanto a capacidade de entrega.",
    about_p3: "Busco oportunidades para contribuir com times que valorizem consistência, evolução e boa engenharia de software.",
    about_stack_profile: "Perfil",
    about_stack_profile_desc: "Desenvolvimento back-end em construção sólida",
    about_stack_approach: "Abordagem",
    about_stack_approach_desc: "Projetos práticos, evolução consistente e base técnica crescente",
    about_stack_interests: "Interesses",
    about_stack_interests_desc: "APIs, automação, bancos de dados, cloud e infraestrutura",
    skills_eyebrow: "Habilidades e tecnologias",
    skills_heading: "Base técnica atual de desenvolvimento e estudo",
    skills_description: "Tecnologias e ferramentas que fazem parte da minha rotina de aprendizado, prática e desenvolvimento de projetos.",
    skills_data: "Dados",
    skills_infra: "Automação e Infra",
    skills_tools: "Ferramentas",
    projects_eyebrow: "Projetos em destaque",
    projects_heading: "Projetos que traduzem evolução técnica e foco prático",
    projects_description: "Cada projeto reforça um eixo importante da minha formação: construção de APIs, automação e consolidação de fundamentos em Java.",
    project1_desc: "API REST desenvolvida em Python com Flask para gerenciamento de músicas, com operações de cadastro, listagem, edição e remoção. O projeto também inclui autenticação com JWT e integração com banco de dados relacional.",
    project2_title: "Web Scraping de Cotações",
    project2_desc: "Aplicação em Python para coleta automatizada de cotações de câmbio em tempo real. O projeto reforça conhecimentos em automação, extração de dados e manipulação de informações externas de forma estruturada.",
    project2_stack_automation: "Automação",
    project3_stack_oop: "POO",
    project3_stack_fundamentals: "Fundamentos",
    project3_desc: "Repositório dedicado à consolidação da base em Java, cobrindo lógica de programação, programação orientada a objetos, estruturas de dados e fundamentos essenciais para construção de aplicações mais robustas.",
    project_link: "Ver projeto",
    trajectory_eyebrow: "Trajetória",
    trajectory_heading: "Uma construção guiada por prática, disciplina e aprofundamento técnico",
    traj1_label: "Direção técnica",
    traj1_title: "Foco em desenvolvimento back-end",
    traj1_desc: "Minha trajetória tem sido guiada por estudo consistente, prática em projetos e aprofundamento técnico em desenvolvimento back-end.",
    traj2_label: "Prática orientada a projeto",
    traj2_title: "Aprendizado aplicado em Java e Python",
    traj2_desc: "Tenho direcionado minha evolução para a construção de uma base sólida em Java e Python, combinando fundamentos de programação, desenvolvimento de APIs, integração com banco de dados e automação.",
    traj3_label: "Momento atual",
    traj3_title: "Preparação para desafios cada vez mais relevantes",
    traj3_desc: "Esse processo reflete um perfil comprometido com crescimento contínuo, disciplina técnica e preparação para contribuir em contextos profissionais com mais responsabilidade e complexidade.",
    edu_eyebrow: "Formação e desenvolvimento",
    edu_heading: "Base em construção com estudo contínuo e prática consistente",
    edu_card1_title: "Formação",
    edu_card1_desc: "Formação contínua em tecnologia, com foco em desenvolvimento back-end, bancos de dados, automação e boas práticas de software.",
    edu_card2_title: "Desenvolvimento técnico",
    edu_card2_desc: "Além do estudo teórico, mantenho uma rotina de desenvolvimento prático por meio de projetos próprios, explorando ferramentas, linguagens e conceitos que fortalecem minha atuação técnica.",
    edu_card3_title: "Certificações",
    edu_card3_desc: "Esta seção pode evoluir com certificações e formações complementares à medida que a trajetória avança, mantendo a página alinhada ao crescimento profissional.",
    contact_eyebrow: "Contato",
    contact_heading: "Vamos conversar",
    contact_description: "Estou aberto a oportunidades, conexões profissionais e novos desafios na área de tecnologia. Se você busca alguém com foco em back-end, vontade de evoluir e compromisso com qualidade, será um prazer conversar.",
    contact_email_btn: "Enviar e-mail",
    footer_role: "Desenvolvedor Back-End com foco em Java e Python.",
    footer_thanks: "Obrigado pela visita. Vamos construir algo relevante juntos.",
  },
  en: {
    skip_link: "Skip to main content",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_trajectory: "Journey",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_eyebrow: "Open to opportunities",
    hero_lead: "Back-End Developer focused on Java and Python",
    hero_description: "I build clear, functional and practice-oriented solutions, focusing on back-end development, APIs, automation, and continuous growth of technical foundation.",
    hero_cta_projects: "View projects",
    hero_cta_contact: "Get in touch",
    hero_hl1_title: "Main focus",
    hero_hl1_desc: "Back-end, APIs & automation",
    hero_hl2_title: "Current stack",
    hero_hl2_desc: "Java, Python, PostgreSQL & Docker",
    hero_hl3_title: "Based in",
    hero_hl3_desc: "São Paulo, Brazil",
    about_eyebrow: "About me",
    about_heading: "Technical clarity, constant growth and delivery-focused mindset",
    about_p1: "I'm a developer focused on back-end, dedicated to building objective, well-structured applications that solve real problems.",
    about_p2: "My work is concentrated on Java and Python, with interest in APIs, databases, automation, and cloud and infrastructure fundamentals. I value clean code, continuous learning, and projects that strengthen both technical foundation and delivery capability.",
    about_p3: "I seek opportunities to contribute to teams that value consistency, growth, and sound software engineering.",
    about_stack_profile: "Profile",
    about_stack_profile_desc: "Solid back-end development foundation",
    about_stack_approach: "Approach",
    about_stack_approach_desc: "Practical projects, consistent growth and expanding technical base",
    about_stack_interests: "Interests",
    about_stack_interests_desc: "APIs, automation, databases, cloud & infrastructure",
    skills_eyebrow: "Skills & technologies",
    skills_heading: "Current technical base for development and study",
    skills_description: "Technologies and tools that are part of my learning routine, practice, and project development.",
    skills_data: "Data",
    skills_infra: "Automation & Infra",
    skills_tools: "Tools",
    projects_eyebrow: "Featured projects",
    projects_heading: "Projects that showcase technical growth and practical focus",
    projects_description: "Each project reinforces an important pillar of my education: API building, automation, and Java fundamentals consolidation.",
    project1_desc: "REST API developed in Python with Flask for music management, with registration, listing, editing and deletion operations. The project also includes JWT authentication and integration with a relational database.",
    project2_title: "Exchange Rate Web Scraping",
    project2_desc: "Python application for automated collection of real-time foreign exchange rates. The project reinforces knowledge in automation, data extraction, and structured manipulation of external information.",
    project2_stack_automation: "Automation",
    project3_stack_oop: "OOP",
    project3_stack_fundamentals: "Fundamentals",
    project3_desc: "Repository dedicated to consolidating Java fundamentals, covering programming logic, object-oriented programming, data structures, and essential concepts for building more robust applications.",
    project_link: "View project",
    trajectory_eyebrow: "Journey",
    trajectory_heading: "A path guided by practice, discipline, and technical depth",
    traj1_label: "Technical direction",
    traj1_title: "Focus on back-end development",
    traj1_desc: "My journey has been guided by consistent study, hands-on project work, and deep technical focus on back-end development.",
    traj2_label: "Project-oriented practice",
    traj2_title: "Applied learning in Java and Python",
    traj2_desc: "I've directed my growth toward building a solid foundation in Java and Python, combining programming fundamentals, API development, database integration, and automation.",
    traj3_label: "Current moment",
    traj3_title: "Preparing for increasingly relevant challenges",
    traj3_desc: "This process reflects a profile committed to continuous growth, technical discipline, and preparation to contribute in professional contexts with greater responsibility and complexity.",
    edu_eyebrow: "Education & development",
    edu_heading: "Foundation under construction with continuous study and consistent practice",
    edu_card1_title: "Education",
    edu_card1_desc: "Continuous education in technology, focused on back-end development, databases, automation, and software best practices.",
    edu_card2_title: "Technical development",
    edu_card2_desc: "Beyond theoretical study, I maintain a routine of practical development through personal projects, exploring tools, languages, and concepts that strengthen my technical capability.",
    edu_card3_title: "Certifications",
    edu_card3_desc: "This section may evolve with certifications and complementary training as the journey progresses, keeping the page aligned with professional growth.",
    contact_eyebrow: "Contact",
    contact_heading: "Let's talk",
    contact_description: "I'm open to opportunities, professional connections, and new challenges in technology. If you're looking for someone with back-end focus, eagerness to grow, and commitment to quality, I'd love to chat.",
    contact_email_btn: "Send email",
    footer_role: "Back-End Developer focused on Java and Python.",
    footer_thanks: "Thanks for visiting. Let's build something meaningful together.",
  },
};

let currentLang = localStorage.getItem("site-lang") || "pt";

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";

  // Update page title and meta
  if (lang === "en") {
    document.title = "Marcelo Calegare | Back-End Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional landing page of Marcelo Calegare, back-end developer focused on Java and Python.");
    }
  } else {
    document.title = "Marcelo Calegare | Desenvolvedor Back-End";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Landing page profissional de Marcelo Calegare, desenvolvedor back-end com foco em Java e Python.");
    }
  }

  // Update active button state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem("site-lang", lang);
}

// Language switcher event listeners
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    applyTranslations(btn.dataset.lang);
  });
});

// Apply saved language on page load
applyTranslations(currentLang);

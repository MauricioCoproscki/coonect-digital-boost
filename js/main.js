
// Main JavaScript file for Coonect website

// Data for dynamic content
const values = [
  {
    icon: "heart",
    title: "Paixão pelo Sucesso do Cliente",
    description: "Seu sucesso é nossa motivação"
  },
  {
    icon: "award",
    title: "Excelência e Expertise",
    description: "Qualidade em cada solução"
  },
  {
    icon: "users",
    title: "Colaboração e Parceria",
    description: "Trabalhamos juntos pelo seu crescimento"
  },
  {
    icon: "lightbulb",
    title: "Integridade Inegociável",
    description: "Transparência em todas as relações"
  }
];

const solutions = [
  {
    icon: "wifi",
    title: "Transforme sua Conectividade",
    description: "Internet Banda Larga Fixa, Internet Móvel 4G/5G+, FWA 5G+, Links Dedicados e M2M.",
    benefits: [
      "Fibra óptica de alta velocidade",
      "5G+ para operações avançadas",
      "Links dedicados para estabilidade",
      "Conectividade M2M para IoT"
    ],
    ctaText: "Revolucione sua Conectividade",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "message-square",
    title: "Revolucione sua Comunicação",
    description: "Telefonia Fixa Empresarial, Telefonia Móvel, PABX Virtual/Cloud e soluções integradas.",
    benefits: [
      "PABX Virtual na nuvem",
      "Telefonia móvel empresarial",
      "Comunicação unificada",
      "Atendimento inteligente"
    ],
    ctaText: "Inove sua Comunicação",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: "globe",
    title: "Digitalize sua Empresa",
    description: "Websites, Domínios, E-mail Empresarial, Microsoft 365, Google Workspace.",
    benefits: [
      "Sites profissionais responsivos",
      "E-mail empresarial seguro",
      "Microsoft 365 completo",
      "Colaboração na nuvem"
    ],
    ctaText: "Acelere sua Digitalização",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "shield",
    title: "Fortaleça e Proteja seu Negócio",
    description: "ERP, Segurança Cibernética, Monitoramento, Gestão de Equipes e soluções de proteção.",
    benefits: [
      "ERP para gestão integrada",
      "Proteção Digital McAfee",
      "Monitoramento 24/7",
      "Backup e recuperação"
    ],
    ctaText: "Proteja sua Operação",
    gradient: "from-red-500 to-orange-500"
  }
];

const differentials = [
  {
    icon: "users",
    title: "Atendimento Personalizado",
    description: "Cada PME é única. Oferecemos consultoria especializada focada nas necessidades específicas do seu negócio.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "map-pin",
    title: "Expertise Local",
    description: "Conhecemos a realidade das PMEs da Região Sul e oferecemos suporte presencial quando necessário.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "trending-up",
    title: "Experiência Comprovada",
    description: "Mais de 25 anos de experiência combinada em telecomunicações, tecnologia e operações B2B.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "headphones",
    title: "Suporte Ágil",
    description: "Atendimento rápido e eficiente, com acompanhamento pós-venda focado no seu sucesso.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "star",
    title: "Foco Exclusivo em PMEs",
    description: "Entendemos os desafios únicos das pequenas e médias empresas e desenvolvemos soluções sob medida.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: "shield",
    title: "Força da Claro Empresas",
    description: "Acesso às melhores soluções de telecomunicações do mercado com a confiabilidade da Claro.",
    color: "from-red-500 to-pink-500"
  }
];

const contactInfo = [
  {
    icon: "phone",
    title: "Telefone",
    content: "(51) 99443-2288",
    subtitle: "WhatsApp Business disponível"
  },
  {
    icon: "mail",
    title: "E-mail",
    content: "<a href='mailto:contato@coonect.com.br'>contato@coonect.com.br</a>",
    subtitle: "Resposta em até 24h"
  },
  {
    icon: "map-pin",
    title: "Endereço",
    content: "Porto Alegre, RS",
    subtitle: "Atendimento presencial agendado"
  },
  {
    icon: "clock",
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 18h",
    subtitle: "Suporte emergencial 24/7"
  }
];

// Initialize Lucide icons
function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Populate values section
function populateValues() {
  const valuesGrid = document.getElementById('values-grid');
  if (!valuesGrid) return;

  valuesGrid.innerHTML = values.map(value => `
    <div class="text-center hover:shadow-lg transition-shadow border-0 bg-gray-50 rounded-lg p-6">
      <div class="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
        <i data-lucide="${value.icon}" class="w-6 h-6"></i>
      </div>
      <h4 class="font-semibold text-gray-900 mb-2">${value.title}</h4>
      <p class="text-sm text-gray-600">${value.description}</p>
    </div>
  `).join('');
}

// Populate solutions section
function populateSolutions() {
  const solutionsGrid = document.getElementById('solutions-grid');
  if (!solutionsGrid) return;

  solutionsGrid.innerHTML = solutions.map(solution => `
    <div class="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden bg-white rounded-lg">
      <div class="h-2 bg-gradient-to-r ${solution.gradient}"></div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="inline-flex p-3 rounded-lg bg-gradient-to-br ${solution.gradient} text-white">
            <i data-lucide="${solution.icon}" class="w-6 h-6"></i>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            ${solution.title}
          </h3>
          
          <p class="text-gray-600">
            ${solution.description}
          </p>
          
          <ul class="space-y-2">
            ${solution.benefits.map(benefit => `
              <li class="flex items-start space-x-2">
                <div class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-sm text-gray-700">${benefit}</span>
              </li>
            `).join('')}
          </ul>
          <a href="#contato">
          <button class="w-full mt-4 border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 rounded-md font-medium">
            ${solution.ctaText}
          </button>
          </a> 
        </div>
      </div>
    </div>
  `).join('');
}

// Populate differentials section
function populateDifferentials() {
  const differentialsGrid = document.getElementById('differentials-grid');
  if (!differentialsGrid) return;

  differentialsGrid.innerHTML = differentials.map(item => `
    <div class="group">
      <div class="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <div class="inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
          ${item.title}
        </h3>
        <p class="text-gray-300 leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');
}

// Populate contact info
function populateContactInfo() {
  const contactInfoContainer = document.getElementById('contact-info');
  if (!contactInfoContainer) return;

  contactInfoContainer.innerHTML = contactInfo.map(info => `
    <div class="bg-white border-0 shadow-lg rounded-lg">
      <div class="p-6">
        <div class="flex items-start space-x-4">
          <div class="bg-orange-500 text-white p-3 rounded-lg">
            <i data-lucide="${info.icon}" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-1">${info.title}</h3>
            <p class="text-gray-600">${info.content}</p>
            <p class="text-sm text-orange-600">${info.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Handle contact form submission
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    this.reset();
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initLucideIcons();
  initMobileMenu();
  initSmoothScrolling();
  populateValues();
  populateSolutions();
  populateDifferentials();
  populateContactInfo();
  initContactForm();
  initAnimations();
  
  // Re-initialize Lucide icons after populating dynamic content
  setTimeout(() => {
    initLucideIcons();
  }, 100);
});

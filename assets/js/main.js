/**
 * NAMA LOG - Logística de Entrega de Motoboy no Rio de Janeiro
 * Scripts Interativos & Dinâmica do Site
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  
  initServiceTabs();
  initFaqAccordion();
  initLiveDispatchBadge();
  initScrollAnimations();
});

// 1. Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-md', 'py-3');
      navbar.classList.remove('bg-white/80', 'py-4', 'shadow-sm');
    } else {
      navbar.classList.add('bg-white/80', 'py-4', 'shadow-sm');
      navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur-md', 'py-3');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    
    // Optional: Swap icon from bars to X
    const icon = menuBtn.querySelector('i');
    if (icon) {
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
      } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
      }
    }
  };

  menuBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking any link inside it
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
    });
  });
}

// 3. Interactive Route & Quote Simulator
function initRouteSimulator() {
  const originSelect = document.getElementById('sim-origin');
  const destSelect = document.getElementById('sim-dest');
  const serviceSelect = document.getElementById('sim-service');
  const submitBtn = document.getElementById('sim-submit-btn');
  const etaBadge = document.getElementById('sim-eta-badge');
  const priceEstimate = document.getElementById('sim-price-estimate');

  if (!originSelect || !destSelect || !submitBtn) return;

  const updateSimulation = () => {
    const origin = originSelect.value;
    const dest = destSelect.value;
    const service = serviceSelect.value;

    let timeText = 'Coleta em 15-25 min';
    let estimateText = 'Sob Consulta Rápida';

    if (origin && dest) {
      if (origin === dest) {
        timeText = 'Entrega local expressa (15-30 min)';
        estimateText = 'A partir de R$ 18';
      } else {
        timeText = 'Rota estimada: 35-50 min';
        estimateText = 'A partir de R$ 25';
      }
    }

    if (etaBadge) etaBadge.textContent = timeText;
    if (priceEstimate) priceEstimate.textContent = estimateText;

    // Update WhatsApp link target
    const phone = '5521983567002';
    const message = `Olá, Nama Log! Gostaria de uma cotação rápida para entrega:
📍 *Origem:* ${origin || 'Rio de Janeiro'}
🏁 *Destino:* ${dest || 'Rio de Janeiro'}
📦 *Modalidade:* ${service || 'Entrega Expressa'}
Por favor, poderiam me informar o valor e disponibilidade de motoboy?`;

    submitBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  originSelect.addEventListener('change', updateSimulation);
  destSelect.addEventListener('change', updateSimulation);
  serviceSelect.addEventListener('change', updateSimulation);

  updateSimulation();
}

// 4. Service Filter Tabs
function initServiceTabs() {
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-card-item');

  if (!tabButtons.length || !serviceCards.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
        b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      });

      btn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      btn.classList.add('bg-sky-600', 'text-white', 'shadow-md');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category === 'all') {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });
}

// 5. Accordion FAQ
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all other items
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent && otherItem !== item) {
          otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// 6. Live Dispatch / Online Motoboys Ticker
function initLiveDispatchBadge() {
  const countEl = document.getElementById('live-riders-count');
  if (!countEl) return;

  // Realistic fluctuation between 14 and 22 riders online in Rio
  const updateRiders = () => {
    const base = 16;
    const variation = Math.floor(Math.random() * 7) - 3;
    countEl.textContent = (base + variation).toString();
  };

  setInterval(updateRiders, 15000);
}


// 7. Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .slide-up').forEach((el) => {
    observer.observe(el);
  });
}

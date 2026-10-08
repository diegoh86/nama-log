const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const newLines = [];
let i = 0;
while (i < lines.length) {
  if (lines[i].includes('"telephone": "+55-21-98356-7002",')) {
    newLines.push(lines[i]);
    newLines.push('    "url": "https://namalog.com.br"');
    newLines.push('  }');
    newLines.push('  </script>');
    newLines.push('</head>');
    newLines.push('<body class="bg-brand-surface text-brand-navy font-sans antialiased selection:bg-brand-orange selection:text-white flex flex-col min-h-screen">');
    newLines.push('  ');
    newLines.push('  <!-- Header / Navbar -->');
    newLines.push('  <header id="main-navbar" class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">');
    newLines.push('    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">');
    newLines.push('      <div class="flex justify-between items-center h-20">');
    newLines.push('        <!-- Logo -->');
    newLines.push('        <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo(0,0)">');
    newLines.push('          <img src="assets/images/logo.jpg" alt="Nama Log Logo" class="h-12 w-auto rounded-lg shadow-sm">');
    newLines.push('          <span class="ml-3 font-bold text-xl tracking-tight text-brand-navy">Nama <span class="text-brand-orange">Log</span></span>');
    newLines.push('        </div>');
    newLines.push('');
    newLines.push('        <!-- Desktop Navigation -->');
    newLines.push('        <nav class="hidden md:flex space-x-8">');
    newLines.push('          <a href="#inicio" class="text-brand-navyLight hover:text-brand-orange transition-colors font-semibold text-sm">Início</a>');
    newLines.push('          <a href="#sobre" class="text-brand-navyLight hover:text-brand-orange transition-colors font-semibold text-sm">Sobre Nós</a>');
    newLines.push('          <a href="#servicos" class="text-brand-navyLight hover:text-brand-orange transition-colors font-semibold text-sm">Serviços</a>');
    newLines.push('          <a href="#simulador" class="text-brand-navyLight hover:text-brand-orange transition-colors font-semibold text-sm">Simulador</a>');
    newLines.push('          <a href="#faq" class="text-brand-navyLight hover:text-brand-orange transition-colors font-semibold text-sm">FAQ</a>');
    newLines.push('        </nav>');
    newLines.push('');
    newLines.push('        <!-- CTA Button Desktop -->');
    newLines.push('        <div class="hidden md:flex items-center">');
    newLines.push('          <a href="https://wa.me/5521983567002" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-brand-orange border border-transparent rounded-full hover:bg-brand-orangeDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50">');
    newLines.push('            <i class="fa-brands fa-whatsapp mr-2 text-lg"></i>');
    newLines.push('            Chamar no WhatsApp');
    newLines.push('          </a>');
    newLines.push('        </div>');
    newLines.push('');
    newLines.push('        <!-- Mobile menu button -->');
    newLines.push('        <div class="flex items-center md:hidden">');
    newLines.push('          <button type="button" id="mobile-menu-btn" class="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange" aria-expanded="false">');
    newLines.push('            <span class="sr-only">Abrir menu principal</span>');
    newLines.push('            <i class="fa-solid fa-bars text-2xl"></i>');
    newLines.push('          </button>');
    newLines.push('        </div>');
    newLines.push('      </div>');
    newLines.push('    </div>');
    newLines.push('');
    newLines.push('    <!-- Mobile Menu Overlay Background -->');
    newLines.push('    <div id="mobile-menu-backdrop" class="fixed inset-0 bg-brand-navy/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300"></div>');
    newLines.push('');
    newLines.push('    <!-- Mobile Menu Panel -->');
    newLines.push('    <div id="mobile-menu" class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col">');
    newLines.push('      <div class="px-4 py-6 border-b border-gray-100 flex justify-between items-center">');
    newLines.push('        <span class="font-bold text-xl text-brand-navy">Menu</span>');
    newLines.push('        <button id="mobile-menu-close" class="text-gray-400 hover:text-brand-orange">');
    newLines.push('          <i class="fa-solid fa-xmark text-2xl"></i>');
    newLines.push('        </button>');
    newLines.push('      </div>');
    newLines.push('      <div class="px-4 py-6 space-y-4 flex-1 overflow-y-auto">');
    newLines.push('        <a href="#inicio" class="mobile-menu-link block px-3 py-3 rounded-md text-base font-semibold text-brand-navy hover:text-brand-orange hover:bg-gray-50">Início</a>');
    newLines.push('        <a href="#sobre" class="mobile-menu-link block px-3 py-3 rounded-md text-base font-semibold text-brand-navy hover:text-brand-orange hover:bg-gray-50">Sobre Nós</a>');
    newLines.push('        <a href="#servicos" class="mobile-menu-link block px-3 py-3 rounded-md text-base font-semibold text-brand-navy hover:text-brand-orange hover:bg-gray-50">Serviços</a>');
    newLines.push('        <a href="#simulador" class="mobile-menu-link block px-3 py-3 rounded-md text-base font-semibold text-brand-navy hover:text-brand-orange hover:bg-gray-50">Simulador</a>');
    newLines.push('        <a href="#faq" class="mobile-menu-link block px-3 py-3 rounded-md text-base font-semibold text-brand-navy hover:text-brand-orange hover:bg-gray-50">FAQ</a>');
    newLines.push('      </div>');
    newLines.push('      <div class="p-4 border-t border-gray-100">');
    newLines.push('        <a href="https://wa.me/5521983567002" target="_blank" class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-brand-orange hover:bg-brand-orangeDark">');
    newLines.push('          <i class="fa-brands fa-whatsapp mr-2"></i> Chamar WhatsApp');
    newLines.push('        </a>');
    newLines.push('      </div>');
    newLines.push('    </div>');
    newLines.push('  </header>');
    newLines.push('');
    newLines.push('  <main>');
    
    i++;
    while (i < lines.length && !lines[i].includes('<main>')) {
      i++;
    }
    i++;
    continue;
  }
  newLines.push(lines[i]);
  i++;
}

fs.writeFileSync('index.html', newLines.join('\n'), 'utf8');
console.log('Fixed index.html via lines');

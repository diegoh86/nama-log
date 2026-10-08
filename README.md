# Nama Log - Logística de Entrega de Motoboy no Rio de Janeiro

Landing Page institucional moderna, responsiva e de alta conversão para a **Nama Log**, desenvolvida com **HTML5**, **Tailwind CSS**, **JavaScript Vanilla** e **FontAwesome 6**.

---

## Recursos & Funcionalidades

- **Identidade Visual Fiel:** Paleta baseada na logomarca oficial (Azul Marinho, Cyano Elétrico e Laranja Vibrante).
- **SEO Avançado:** Meta tags completas, Open Graph (preview no WhatsApp), Twitter Cards, dados estruturados Schema.org (\"DeliveryService\" e \"LocalBusiness\").
- **Simulador Interativo de Rota:** Escolha origem e destino no Rio de Janeiro e monte uma mensagem personalizada com link direto para o WhatsApp.
- **Botões de Chamada Ràpida:**
  - Botão flutuante do WhatsApp com efeito de pulso e notificação de mensagem;
  - Botões no topo, cabeçalho, hero, simulador e em cada cartão de serviço;
  - Número configurado: **(21) 98356-7002**,
- **Seções Completas:**
  - Hero dinâmico com métricas, status vivo e card de despacho ao vivo;
    - Ticker infinito com bairros do Rio;
    - Sobre Nós e diferenciais da empresa;
    - Catálogo interativo de serviços (com filtro de categorias);
    - Cobertura nos principais polos do RJ (Centro, Zona Sul, Barra, Zona Norte, Niterói, Baixada);
    - Passo a passo de solicitação;
    - Avaliações e depoimentos;
    - FAQ com efeito sanfona;
    - Rodapé institucional com dados e crédito a **DHA Consultoria (dhaconsultoria.com.br)**.

---

## Como Rodar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador ou rodar um servidor local:

```bash
npx serve .
`x``

---

## Deploy no GitHub Pages

O projeto já possui todos os arquivos estáticos necessários e o arquivo `.nojekyll`.

1. Fazer o commit local:
   ```bash
   git add .
   git commit -m "feat: landing page institucional Nama Log"
   ```

2. Adicionar o repositório remoto no GitHub:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/nama-log.git
   git push -u origin main
   ```

3. No GitHub:
   - Acesse **Settings** > **Pages**
   - Em **Build and deployment > Branch**, selecione **main** e a pasta **/ (root)**
   - Clique em **Save**

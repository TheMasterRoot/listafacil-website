class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgb(17, 24, 39);
          color: white;
          padding: 3rem 1.5rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .logo {
          height: 2.5rem;
          width: 2.5rem;
        }
        .brand {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .description {
          color: rgb(156, 163, 175);
        }
        .section-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .link-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .link-item {
          color: rgb(156, 163, 175);
          transition: color 0.3s;
        }
        .link-item:hover {
          color: white;
        }
        .contact-info {
          color: rgb(156, 163, 175);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .divider {
          border-top: 1px solid rgb(31, 41, 55);
          padding-top: 2rem;
          text-align: center;
          color: rgb(156, 163, 175);
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="logo-section">
                <img src="../logo.png" alt="Lista Fácil" class="logo">
                <span class="brand">Lista Fácil</span>
              </div>
              <p class="description">
                Organize suas compras com inteligência e praticidade.
              </p>
            </div>
            
            <div>
              <h4 class="section-title">Links Rápidos</h4>
              <div class="link-list">
                <a href="../#features" class="link-item">Recursos</a>
                <a href="../#how-it-works" class="link-item">Como Funciona</a>
                <a href="../#download" class="link-item">Download</a>
              </div>
            </div>
            
            <div>
              <h4 class="section-title">Legal</h4>
              <div class="link-list">
                <a href="../termos.html" class="link-item">Termos de Uso</a>
                <a href="../privacidade.html" class="link-item">Política de Privacidade</a>
              </div>
            </div>
            
            <div>
              <h4 class="section-title">Contato</h4>
              <p class="contact-info">
                <i class="fas fa-envelope"></i>
                jasarplay@gmail.com
              </p>
            </div>
          </div>
          
          <div class="divider">
            <p>&copy; 2025 Lista Fácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
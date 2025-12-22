class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 50;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo {
          height: 2.5rem;
          width: 2.5rem;
        }
        .brand {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .desktop-menu {
          display: none;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
        }
        .menu-link {
          color: rgb(55, 65, 81);
          transition: color 0.3s;
        }
        .menu-link:hover {
          color: rgb(102, 126, 234);
        }
        .mobile-menu-btn {
          color: rgb(55, 65, 81);
          font-size: 1.5rem;
        }
        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }
        .mobile-menu {
          display: none;
          background: white;
          border-top: 1px solid rgb(229, 231, 235);
          padding: 1rem 1.5rem;
        }
        .mobile-menu.open {
          display: block;
        }
        .mobile-link {
          display: block;
          color: rgb(55, 65, 81);
          margin: 0.75rem 0;
          transition: color 0.3s;
        }
        .mobile-link:hover {
          color: rgb(102, 126, 234);
        }
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      </style>
      <nav>
        <div class="container">
          <div class="nav-content">
            <div class="logo-section">
              <a href="../">
                <img src="../logo.png" alt="Lista Fácil" class="logo">
              </a>
              <a href="../" class="brand">Lista Fácil</a>
            </div>
            
            <div class="desktop-menu">
              <a href="../#features" class="menu-link">Recursos</a>
              <a href="../#how-it-works" class="menu-link">Como Funciona</a>
              <a href="../#testimonials" class="menu-link">Depoimentos</a>
              <a href="../#download" class="menu-link">Download</a>
            </div>
            
            <button class="mobile-menu-btn" onclick="this.getRootNode().host.toggleMobileMenu()">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          
          <div class="mobile-menu" id="mobileMenu">
            <a href="../#features" class="mobile-link">Recursos</a>
            <a href="../#how-it-works" class="mobile-link">Como Funciona</a>
            <a href="../#testimonials" class="mobile-link">Depoimentos</a>
            <a href="../#download" class="mobile-link">Download</a>
          </div>
        </div>
      </nav>
      <script>
        class CustomNavbar extends HTMLElement {
          toggleMobileMenu() {
            const menu = this.shadowRoot.getElementById('mobileMenu');
            menu.classList.toggle('open');
          }
        }
        customElements.define('custom-navbar', CustomNavbar);
      </script>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
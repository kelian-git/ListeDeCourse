// /navbar/navbar.js
class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {

        this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        :host { display:block; font-family:"Segoe UI", Roboto, Arial, sans-serif; color:#333; }
        body { overflow-x: hidden; margin: 0; padding: 0 }

        .topbar {
          position: fixed;      
          top: 0;
          left: 0;
          right: 0;
          width: 100%;      
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #009688;
          color: #fff;
          padding: 12px 16px;
          box-shadow: 0 2px 5px rgba(0,0,0,.2);
          z-index: 100;
        }
        .title { font-size:1.5rem; font-weight:600; }
        .item {
          display:flex;
          align-items:center;
          padding:8px 16px;
          color:#fff;
          text-decoration:none;
          font-size:1.3rem;
          border-radius:4px;
          transition: background-color .2s;
        }
        .item:hover {
          background-color:rgba(255,255,255,0.2);
        }

        /* Boutons menu */
        .menu-btn {
          background:none;
          border:none;
          color:#fff;
          font-size:1.8rem;
          cursor:pointer;
          transition:transform .2s;
        }
        .menu-btn:hover { transform:scale(1.1); }

        /* SIDEBAR */
        .sidebar {
          position:fixed;
          top:0; left:0;
          width:260px; height:100%;
          background:#fff;
          box-shadow:0 0 15px rgba(0,0,0,.2);
          transform:translateX(-100%);
          transition:transform .3s ease;
          padding-top:60px;
          z-index:300;
          overflow-y:auto;
        }
        .sidebar-right { left:auto; right:0; transform:translateX(100%); }
        .sidebar.open { transform:translateX(0); }
        .sidebar img { display:block; width:80%; max-width:150px; margin:0 auto; }

        /* Liens */
        .menu-item {
          display:block;
          padding:14px 20px;
          color:#333;
          text-decoration:none;
          font-size:1rem;
          border-bottom:1px solid #eee;
          transition:background-color .2s, color .2s;
        }
        .menu-item:hover { background-color:#009688; color:#fff; }
        .menu-item.active { background:#e0f2f1; color:#00695c; font-weight:600; }

        /* Fermer */
        .close-btn {
          position:absolute;
          top:10px; right:15px;
          background:none;
          border:none;
          font-size:2rem;
          color:#555;
          cursor:pointer;
          transition:color .2s;
        }
        .close-btn:hover { color:#009688; }

        /* Backdrop */
        .backdrop {
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.25);
          opacity:0;
          pointer-events:none;
          transition:opacity .2s;
          z-index:200;
        }
        .backdrop.show { opacity:1; pointer-events:auto; }

        /* Responsive */
        @media (max-width: 600px) {
          .sidebar { width:80%; }
          .title { font-size:1.2rem; }
        }
      </style>

      <!-- Sidebar gauche -->
      <nav class="sidebar sidebar-left" id="sidebarLeft">
        <button class="close-btn" id="closeLeft" aria-label="Fermer">&times;</button>
        <img src="/assets/img/logo_4.png" alt="image">
        <a href="/index.html" class="menu-item">Accueil</a>
        <a href="/Shopping/shopping.html" class="menu-item">Shopping</a>
        <a href="/panier/panier.html" class="menu-item">Paniers</a>
      </nav>

      <!-- Backdrop -->
      <div class="backdrop" id="backdrop"></div>

      <!-- Barre du haut -->
      <header class="topbar">
        <div class="left-section">
          <button class="menu-btn left" id="openLeft" aria-label="Ouvrir le menu gauche">&#9776;</button>
        </div>
        <div class="right-section">
          <a href="connexion" class="item">Connexion</a>
        </div>
      </header>
    `;

        const sidebarLeft = this.shadowRoot.getElementById('sidebarLeft');
        const openLeftBtn = this.shadowRoot.getElementById('openLeft');
        const closeLeftBtn = this.shadowRoot.getElementById('closeLeft');
        const backdrop = this.shadowRoot.getElementById('backdrop');

        const openLeft = () => {
            sidebarLeft.classList.add('open');
            backdrop.classList.add('show');
        };
        const closeLeft = () => {
            sidebarLeft.classList.remove('open');
            backdrop.classList.remove('show');
        };
        const closeAll = () => {
            closeLeft();
        };

        openLeftBtn.addEventListener('click', openLeft);
        closeLeftBtn.addEventListener('click', closeLeft);
        backdrop.addEventListener('click', closeAll);

        this._onKeydown = (e) => {
            if (e.key === 'Escape') closeAll();
        };
        window.addEventListener('keydown', this._onKeydown, {passive: true});
    }

    disconnectedCallback() {
        window.removeEventListener('keydown', this._onKeydown);
    }
}

if (!customElements.get('app-navbar')) {
    customElements.define('app-navbar', AppNavbar);
}

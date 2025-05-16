class FooterApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    this.shadow.innerHTML = `
      <style>
        footer {
          background: #222; color: white; text-align: center;
          padding: 15px; position: fixed; bottom: 0; width: 100%;
        }
        a { color: #ccc; margin: 0 10px; text-decoration: none; }
      </style>
      <footer>
        © 2025 Todos los derechos reservados.
        <br>
        <a href="https://github.com/Sebas262002/Laboratorio_2-Lech-n-Kevin.git" target="_blank">GitHub</a> |
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);

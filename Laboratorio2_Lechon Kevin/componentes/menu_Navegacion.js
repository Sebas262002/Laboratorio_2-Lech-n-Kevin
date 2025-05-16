import { mostrarVista } from '../app.js';

class MenuNavegacion extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadow.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const vista = a.dataset.vista;
        mostrarVista(vista);
      });
    });
  }

  render = () => {
    this.shadow.innerHTML = `
      <style>
        nav { background: #333; color: white; padding: 10px; }
        a { margin-right: 15px; color: white; cursor: pointer; text-decoration: none; }
      </style>
      <nav>
        <a data-vista="registro-producto">Inicio</a>
        <a data-vista="lista-productos">Gestión Productos</a>
        <a data-vista="acerca-de">Acerca de</a>
      </nav>
    `;
  }
}

customElements.define('menu-navegacion', MenuNavegacion);

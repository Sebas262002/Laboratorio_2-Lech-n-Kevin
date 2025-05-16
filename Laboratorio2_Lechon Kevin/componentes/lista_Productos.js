import { productos, mostrarVista } from '../app.js';

class ListaProductos extends HTMLElement {
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
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        button { margin-right: 5px; }
      </style>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          ${productos.map(p => `
            <tr>
              <td>${p.nombre}</td>
              <td>${p.precio}</td>
              <td>${p.cantidad}</td>
              <td>
                <button data-id="${p.id}" class="editar">Editar</button>
                <button data-id="${p.id}" class="eliminar">Eliminar</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    this.shadow.querySelectorAll('.editar').forEach(btn =>
      btn.addEventListener('click', () => mostrarVista('editor-producto', btn.dataset.id))
    );

    this.shadow.querySelectorAll('.eliminar').forEach(btn =>
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const i = productos.findIndex(p => p.id === id);
        if (i >= 0) {
          productos.splice(i, 1);
          this.connectedCallback();
        }
      })
    );
  }
}

customElements.define('lista-productos', ListaProductos);

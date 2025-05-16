import { productos, mostrarVista } from '../app.js';

class EditorProducto extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.idProducto = parseInt(this.getAttribute('id-producto'));
    this.producto = productos.find(p => p.id === this.idProducto);
    this.render();
    this.setupEventListeners();
  }

  render = () => {
    if (!this.producto) return this.shadow.innerHTML = "<p>Producto no encontrado</p>";
    this.shadow.innerHTML = `
      <style>
        form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; }
      </style>
      <h2>Editar Producto</h2>
      <form id="form-editar">
        <input type="text" id="nombre" value="${this.producto.nombre}" required />
        <input type="number" id="precio" value="${this.producto.precio}" required />
        <input type="number" id="cantidad" value="${this.producto.cantidad}" required />
        <textarea id="descripcion" required>${this.producto.descripcion}</textarea>
        <button type="submit">Actualizar</button>
      </form>
    `;
  }

  setupEventListeners = () => {
    this.shadow.getElementById('form-editar').addEventListener('submit', e => {
      e.preventDefault();
      this.producto.nombre = this.shadow.getElementById('nombre').value.trim();
      this.producto.precio = parseFloat(this.shadow.getElementById('precio').value);
      this.producto.cantidad = parseInt(this.shadow.getElementById('cantidad').value);
      this.producto.descripcion = this.shadow.getElementById('descripcion').value.trim();
      alert("Producto actualizado");
      mostrarVista('lista-productos');
    });
  }
}

customElements.define('editor-producto', EditorProducto);

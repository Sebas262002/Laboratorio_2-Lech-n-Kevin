import { productos, mostrarVista } from '../app.js';

class RegistroProducto extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render = () => {
    this.shadow.innerHTML = `
      <style>
        form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; }
        input, textarea { padding: 5px; }
        button { padding: 5px; }
      </style>
      <h2>Registrar Producto</h2>
      <form id="form-registro">
        <input type="text" placeholder="Nombre" id="nombre" required />
        <input type="number" placeholder="Precio" id="precio" required />
        <input type="number" placeholder="Cantidad" id="cantidad" required />
        <textarea placeholder="Descripción" id="descripcion" required></textarea>
        <button type="submit">Registrar</button>
      </form>
    `;
  }

  setupEventListeners = () => {
    this.shadow.getElementById('form-registro').addEventListener('submit', e => {
      e.preventDefault();
      const nombre = this.shadow.getElementById('nombre').value.trim();
      const precio = parseFloat(this.shadow.getElementById('precio').value);
      const cantidad = parseInt(this.shadow.getElementById('cantidad').value);
      const descripcion = this.shadow.getElementById('descripcion').value.trim();

      if (!nombre || isNaN(precio) || isNaN(cantidad) || !descripcion) return alert("Todos los campos son obligatorios");

      productos.push({ id: Date.now(), nombre, precio, cantidad, descripcion });
      alert("Producto registrado");
      mostrarVista('lista-productos');
    });
  }
}

customElements.define('registro-producto', RegistroProducto); 


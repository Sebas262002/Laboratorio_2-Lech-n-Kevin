import './componentes/menu_Navegacion.js';
import './componentes/registro_Producto.js';
import './componentes/lista_Productos.js';
import './componentes/editor_Producto.js';
import './componentes/footer_app.js';

export const productos = [];

export const mostrarVista = (vista, id = null) => {
  const contenedor = document.getElementById('vista');
  contenedor.innerHTML = '';
  const componente = document.createElement(vista);
  if (id) componente.setAttribute('id-producto', id);
  contenedor.appendChild(componente);
};

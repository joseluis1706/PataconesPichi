import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { CarritoItem } from '../models/carrito-item.model';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  cliente = {
    nombre: '',
    direccion: '',
    pago: 'Nequi'
  };

  private key = 'carrito';
  private items: CarritoItem[] = [];

  constructor() {
    this.cargarStorage();
    const data = localStorage.getItem(this.key);
    this.items = data ? JSON.parse(data) : [];
   }

   //Metodo para cargar el storage
  private cargarStorage() {
    const items = localStorage.getItem('carrito_items');
    const cliente = localStorage.getItem('carrito_cliente');

    if (items) {
      this.items = JSON.parse(items);
    }

    if (cliente) {
      this.cliente = JSON.parse(cliente);
    }
  }


  // ➕ Agregar producto
  agregar(producto: Producto, cantidad: number) {
    const existente = this.items.find(i => i.producto.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }

    this.guardarStorage();
  }

  // ❌ Eliminar producto
  eliminar(productoId: number) {
    this.items = this.items.filter(
      item => item.producto.id !== productoId
    );
    this.guardarStorage();
  }

  obtenerItems() {
    return this.items;
  }

  totalItems() {
    return this.items.reduce((t, i) => t + i.cantidad, 0);
  }

  // 💰 Total
  obtenerTotal(): number {
    return this.items.reduce(
      (total: number, item: CarritoItem) =>
        total  + item.producto.precio * item.cantidad,
      0
    );
  }

  // 📲 Enviar a WhatsApp
  enviarPedidoWhatsApp() {
    const telefono = '573164883837';

    let mensaje = `🍟 *PEDIDO - Patacones el Pichi*%0A`;
    mensaje += `📍 Arjona, Bolívar%0A%0A`;

    mensaje += `🧑 *Cliente:* ${this.cliente.nombre}%0A`;
    mensaje += `🏠 *Dirección:* ${this.cliente.direccion}%0A`;
    mensaje += `💳 *Pago:* ${this.cliente.pago}%0A%0A`;

    mensaje += `🧾 *Detalle:*%0A`;

    this.items.forEach(item => {
      const subtotal = item.producto.precio * item.cantidad;
      mensaje += `- ${item.producto.nombre} x${item.cantidad} → $${subtotal}%0A`;
    });

    mensaje += `%0A💰 *Total:* $${this.obtenerTotal()}%0A%0A`;
    mensaje += `📲 Gracias por tu pedido 🙌`;

    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
    this.limpiarCarrito();
  }

// Guardar cliente
guardarCliente(nombre: string, direccion: string, pago: string) {
  this.cliente = { nombre, direccion, pago };
  this.guardarStorage();
}

// Obtener cliente
obtenerCliente() {
  return this.cliente;
}

// Metodo para guardar en el storage
private guardarStorage() {
  localStorage.setItem('carrito_items', JSON.stringify(this.items));
  localStorage.setItem('carrito_cliente', JSON.stringify(this.cliente));
}

// Metodo para limpiar el carrito
  limpiarCarrito() {
    this.items = [];
    this.cliente = {
      nombre: '',
      direccion: '',
      pago: 'Nequi'
    };
    localStorage.removeItem('carrito_items');
    localStorage.removeItem('carrito_cliente');
  }

}
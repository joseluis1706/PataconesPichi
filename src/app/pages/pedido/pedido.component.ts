import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { ToastService } from '../../services/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './pedido.component.html'
})

  export class PedidoComponent implements OnInit {

  items: any[] = [];
  total = 0;
  nombre = '';
  direccion = '';
  pago = 'Nequi';
  pedidoEnviado = false;

  constructor(private carritoService: CarritoService, private toast: ToastService) { }

  ngOnInit() {
    this.actualizar();

    const cliente = this.carritoService.obtenerCliente();
    this.nombre = cliente.nombre;
    this.direccion = cliente.direccion;
    this.pago = cliente.pago;
  }

  //Método actualizar en el componente
  actualizar() {
    this.items = this.carritoService.obtenerItems();
    this.total = this.carritoService.obtenerTotal();
  }

  //Método eliminar en el componente
  eliminar(id: number) {
    this.carritoService.eliminar(id);
    this.actualizar();
    this.toast.mostrar('Producto eliminado ❌');
  }

  //Método enviarWhatsApp en el componente
  enviarWhatsApp() {
    if (!this.nombre || !this.direccion) {
      this.toast.mostrar('Completa tus datos primero ⚠️');
      return;
    }

    this.carritoService.guardarCliente(
      this.nombre,
      this.direccion,
      this.pago
    );

    this.carritoService.enviarPedidoWhatsApp();

    this.pedidoEnviado = true;
  }

  //Método guardarCliente en el componente
  guardarCliente() {
    this.carritoService.guardarCliente(
      this.nombre,
      this.direccion,
      this.pago
    );
  }

}
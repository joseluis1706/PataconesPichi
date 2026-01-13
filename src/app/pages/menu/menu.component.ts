import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';
import { ToastService } from '../../services/toast.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
    this.productos.forEach(p => p.cantidad = 1);
  }

  agregar(p: any,) {
    const cantidad = p.cantidad && p.cantidad > 0 ? p.cantidad : 1;
    this.carritoService.agregar(p, cantidad);
    this.toast.mostrar('Producto agregado al pedido 🍟');
    p.cantidad = 1;
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {

  adminAutorizado = false;
  clave = '';
  errorLogin = '';
  productos: Producto[] = [];

  nuevo: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    cantidad: 1
  };

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    // SESIÓN
    this.adminAutorizado = localStorage.getItem('admin') === 'true';

    // 🔥 CARGAR PRODUCTOS
    this.productos = this.productoService.obtenerProductos();
  }

  // Añadir nuevo producto
  agregarProducto() {
    this.nuevo.id = Date.now();
    this.productos.push({ ...this.nuevo });
    this.productoService.guardarProductos(this.productos);

    this.nuevo = { id: 0, nombre: '', precio: 0, imagen: '', cantidad: 1 };
  }

  // Eliminar producto
  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    this.productoService.guardarProductos(this.productos);
  }

  // Login administrador
  entrar() {
    if (this.clave.trim() === 'pichi123') {
      this.adminAutorizado = true;
      localStorage.setItem('admin', 'true');
      this.errorLogin = '';
      this.clave = '';
    } else {
      this.errorLogin = '❌ Contraseña inválida';
    }
  }

  // Guardar productos en localStorage
  guardar() {
    localStorage.setItem('productos', JSON.stringify(this.productos));
    alert('Productos guardados ✅');
  }

  // Logout administrador
  logout() {
    localStorage.removeItem('admin');
    this.adminAutorizado = false;
  }

  // Subir imagen
  subirImagen(event: any, producto: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      producto.imagen = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}

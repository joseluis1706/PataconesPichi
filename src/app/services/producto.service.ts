import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private key = 'productos';

  private productosDefault: Producto[] = [
    {
      id: 1,
      nombre: 'Patacones Rellenos',
      cantidad: 1,
      precio: 2000,
      imagen: 'assets/img/patacon_2.jpg'
    },
    {
      id: 2,
      nombre: 'Papas Rellenas',
      cantidad: 1,
      precio: 2000,
      imagen: 'assets/img/papa_rellena_2.jpg'
    },
    {
      id: 3,
      nombre: 'Empanadas',
      cantidad: 1,
      precio: 2000,
      imagen: 'assets/img/empanada_carne.jpg'
    },
    {
      id: 4,
      nombre: 'Picada Pequeña',
      cantidad: 1,
      precio: 6000,
      imagen: 'assets/img/picada_pequeña.jpg'
    },
    {
      id: 5,
      nombre: 'Picada Grande',
      cantidad: 1,
      precio: 12000,
      imagen: 'assets/img/picada_grande.jpg'
    },
    {
      id: 6,
      nombre: 'Chicha / Jugo',
      cantidad: 1,
      precio: 1000,
      imagen: 'assets/img/jugos_2.jpg'
    }
  ];
 
  // Obtener productos del localStorage o los productos por defecto
  obtenerProductos(): Producto[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : this.productosDefault;
  }

  // Guardar productos en el localStorage
  guardarProductos(productos: Producto[]) {
    localStorage.setItem(this.key, JSON.stringify(productos));
  }

}

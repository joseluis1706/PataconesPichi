import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  mensaje = '';
  visible = false;
  

  mostrar(mensaje: string, tiempo = 2500) {
    this.mensaje = mensaje;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, tiempo);
  }
}

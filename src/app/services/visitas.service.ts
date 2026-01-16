import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  private KEY = 'contador_visitas';

  contarVisita(): number {
    let visitas = Number(localStorage.getItem(this.KEY)) || 0;
    visitas++;
    localStorage.setItem(this.KEY, visitas.toString());
    return visitas;
  }

  obtenerVisitas(): number {
    return Number(localStorage.getItem(this.KEY)) || 0;
  }
}

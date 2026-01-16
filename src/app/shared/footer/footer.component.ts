import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VisitasService } from '../../services/visitas.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html'
})

export class FooterComponent {
  year = new Date().getFullYear();
  constructor(public visitasService: VisitasService) { }
}

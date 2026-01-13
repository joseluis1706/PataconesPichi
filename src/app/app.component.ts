import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappButtonComponent } from './shared/whatsapp-button/whatsapp-button.component';
import { ToastComponent } from "./components/toast/toast.component";import { CommonModule } from '@angular/common';
;  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent, ToastComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './whatsapp-button.component.html'
})
export class WhatsappButtonComponent {

  phone = '573164883837';
  message = 'Hola 👋 quiero hacer un pedido en Patacones el Pichi 🍟';

  abrirWhatsApp() {
    const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
}

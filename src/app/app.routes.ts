import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ContactoComponent } from './pages/contacto/contacto.component';    
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'admin', component: AdminComponent }
];

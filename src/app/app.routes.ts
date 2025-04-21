import { Routes } from '@angular/router';
import { UtilidadComponent } from './utilidadView/utilidad.component';
import { ProveedoresComponent } from './proveedoresView/proveedores.component';

export const routes: Routes = [
  { path: 'utilidad', component: UtilidadComponent },
  { path: 'proveedores', component: ProveedoresComponent }
];

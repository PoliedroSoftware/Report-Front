import { Routes } from '@angular/router';
import { UtilidadComponent } from './utilidadView/utilidad.component';
import { ProveedoresComponent } from './proveedoresView/proveedores.component';
import { PrincipalComponent } from './inventarioView/inventario.component';
import { VentasComponent } from './ventasView/ventas.component';
import { VentasMediosComponent } from './ventasMediosView/ventas-medios.component';
import { BorradoresComponent } from './borradoresView/borradores.component';

export const routes: Routes = [
  { path: 'utilidad', component: UtilidadComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'inventario', component: PrincipalComponent  },
  { path: 'ventas', component: VentasComponent  },
  { path: 'ventas-medios', component: VentasMediosComponent  },
  { path: 'borrador', component: BorradoresComponent  }
];

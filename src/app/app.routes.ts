import { Routes } from '@angular/router';
import { UtilityComponent } from './utility-view/utility-view.component';
import { SuppliersComponent } from './suppliersView/suppliers.component';
import { InventoryComponent } from './inventoryView/inventory.component';
import { SalesComponent } from './salesView/sales.component';
import { PaymentMethodComponent } from './payment-method-report/payment-method-report.component';
import { BorradoresComponent } from './borradoresView/borradores.component';
import { DraftViewComponent } from './draftView/draftView.component';


export const routes: Routes = [
 // { path: 'utilidad', component: UtilidadComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'sales', component: SalesComponent  },
  { path: 'payment-method', component: PaymentMethodComponent},
  { path: 'borrador', component: BorradoresComponent },
  { path: 'draft', component:  DraftViewComponent  },
  { path: 'utility', component:  UtilityComponent  },

];

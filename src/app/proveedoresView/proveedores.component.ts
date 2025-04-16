import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
  data = [
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' }
];

data2 = [
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' },
  { fecha: "2025-01-22 00:00:00", proveedor: "NAME",  asesor: "NAME", factura: '77.831.294', saldo: '77.831.294' }
];
}

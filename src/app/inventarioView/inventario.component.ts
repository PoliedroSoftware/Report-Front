import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class PrincipalComponent {

  data = [
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' },
    { proveedor: "NAME", saldo: '77.831.294' }
];

dataProductos = [
  
    {
      codigo: '0325',
      producto: '(MINIATURE) RELIEF SUN : RICE + PROBIOTICS 10ML',
      precioCosto: 15000,
      precioVenta: 20000,
      inventario: 5,
      porcentaje: '33,3%',
      totalCosto: 75000,
      totalVenta: 100000
    },
    {
      codigo: '0372',
      producto: '147 BARRIER CREAM 50ML',
      precioCosto: 72000,
      precioVenta: 102000,
      inventario: 1,
      porcentaje: '41,7%',
      totalCosto: 72000,
      totalVenta: 102000
    },
    {
      codigo: '0373',
      producto: '345 RELIEF CREAM 50ML',
      precioCosto: 72000,
      precioVenta: 102000,
      inventario: 0,
      porcentaje: '41,7%',
      totalCosto: 0,
      totalVenta: 0
    },
    {
      codigo: '0301',
      producto: '[MINI] MASK FIT RED MINI CUSHION 24N LATTE',
      precioCosto: 52000,
      precioVenta: 72000,
      inventario: 3,
      porcentaje: '38,5%',
      totalCosto: 156000,
      totalVenta: 216000
    }
  ];



}

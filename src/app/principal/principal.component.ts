import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  data = [


    { codigo: 1455, producto: 'Desinfectante', precio:'7000', costo:'5000', inventario:'3', totalcosto:15000, totalventa:21000 },
    { codigo: 1456, producto: 'Aromatizador', precio:'8500', costo:'5000', inventario:'3', totalcosto:15000, totalventa:25500 },
    { codigo: 1457, producto: 'Gel desinfectante', precio:'9000', costo:'6000', inventario:'2', totalcosto:18000, totalventa:27000},
    { codigo: 1458, producto: 'Amoniaco', precio:'10500', costo:'7000', inventario:'4', totalcosto:28000, totalventa:42000 },
    { codigo: 1459, producto: 'Laca cabello', precio:'9000', costo:'6500', inventario:'4', totalcosto:26000, totalventa:36000 },
    { codigo: 1460, producto: 'Jabon Rey Liquido', precio:'11000', costo:'5500', inventario:'5', totalcosto:27500, totalventa:55000},
    { codigo: 1461, producto: 'Esponja Baño', precio:'9000', costo:'6500', inventario:'4', totalcosto:26000, totalventa:36000 }
  ];

  data2 = [
    { saldoTotalCosto: 155500, SaldoTotalVenta: 242500, diferencia: 87000 }
   
    
  ];

  data3 = [
    { anio: 2025, mes: "Enero", fecha: "Viernes", utilidad: '77.831.294' },
    { anio: 2024, mes: "Enero", fecha: "Viernes", utilidad: '284.598.893' },
    { anio: 2023, mes: "Enero", fecha: "Viernes", utilidad: '291.807.805' },
    { anio: 2022, mes: "Enero", fecha: "Viernes", utilidad: '261.216.464' },
    { anio: 2021, mes: "Enero", fecha: "Viernes", utilidad: '204.585.135' },
    { anio: 2020, mes: "Enero", fecha: "Viernes", utilidad: '140.700.110' },
    { anio: 2019, mes: "Enero", fecha: "Viernes", utilidad: '31.690.032' }
  ];


}

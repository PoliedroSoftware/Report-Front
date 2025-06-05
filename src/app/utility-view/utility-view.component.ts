import { Injectable } from '@angular/core';
import { Utility } from './utility';
import { UtilityService } from './utility.service';
import { InventoryService } from '../inventoryView/inventory.service';
import { Inventarios } from '../inventoryView/inventory';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-utilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utility-view.component.html',
  styleUrl: './utility-view.component.css'
})
export class UtilityComponent {

    utility:any;
    inventarios: Array<Inventarios>=[];
    valor1:any=1
    valor2:any=2;
    arrayPages:[]=[];
    Resultados:number=0;
    constructor(private utilityService: UtilityService, private inventoryService:InventoryService ) { }

        ngOnInit() {
      // Agrupar data2 por año y mes
      this.getUtilidad(1,10); 
      this.recuperarPorpagina(1, 10);
     }

   // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
  data = [
    { anio: 2025, utilidad: '77.831.294' },
    { anio: 2024, utilidad: '284.598.893' },
    { anio: 2023, utilidad: '291.807.805' },
    { anio: 2022, utilidad: '261.216.464' },
    { anio: 2021, utilidad: '204.585.135' },
    { anio: 2020, utilidad: '140.700.110' },
    { anio: 2019, utilidad: '31.690.032' }
  ];

  data2 = [
    { anio: 2025, mes: "Enero", utilidad: '77.831.294' },
    { anio: 2024, mes: "Enero", utilidad: '284.598.893' },
    { anio: 2023, mes: "Enero", utilidad: '291.807.805' },
    { anio: 2022, mes: "Enero", utilidad: '261.216.464' },
    { anio: 2021, mes: "Enero", utilidad: '204.585.135' },
    { anio: 2020, mes: "Enero", utilidad: '140.700.110' },
    { anio: 2019, mes: "Enero", utilidad: '31.690.032' }
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

      getUtilidad(valor1:any, valor2:any): void {
        this.utilityService.getUtilidad(valor1, valor2).subscribe(response => {
        this.utility = response;
        
        
     })}


      recuperarPorpagina(valor1:any, valor2:any):void {
      
        this.inventarios=[];
        this.inventoryService.getInventarioP(valor1, valor2).subscribe(result =>{
        result.forEach(dato => this.inventarios.push(dato));
        
   
    })
    };
 }

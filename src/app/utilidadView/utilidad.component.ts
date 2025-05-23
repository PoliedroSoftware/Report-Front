import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Utilidad } from './utilidad';
//import { HEROES } from './mock-heroes';
import { UtilidadService } from './utilidad.service';



@Component({
  selector: 'app-utilidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilidad.component.html',
  styleUrl: './utilidad.component.css'
})
export class UtilidadComponent  {

  // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
  

utilidades: Array<any>=[];
     
      miArray: any[][] = [];
      arrayPages:[]=[];
      utilidad: any;
      totalAnio:any;
      totalMes:any;
      totalDia:any;


 
 


  constructor(private utilidadService: UtilidadService) { }
 
  ngOnInit() {
    // Agrupar data2 por año y mes
    
   
    this.getUtilidadService(1,10); 
   
  }


  getUtilidadService(valor1:any, valor2:any): void {
      this.utilidadService.getUtilidadP(valor1, valor2).subscribe(response => {
      this.utilidad = response;
          
    })
  };
}

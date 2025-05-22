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
 
      valor1:any=1
      valor2:any=2;
      arrayPages:[]=[];
     
      utilidad: any;
      totalAnio:any;
      totalMes:any;
      totalDia:any;


 
 


  constructor(private utilidadService: UtilidadService) { }
 
  ngOnInit() {
    // Agrupar data2 por año y mes
   
    this.myservice(); 
   
  }


     myservice(): void {
        this.utilidadService.getUtilidadP(1,10).subscribe(response => {
        this.utilidad = response;
        console.log(this.utilidad);
        this.getTotalPagado()
        this.getTotalPagadoMes();
        this.getTotalPagadoDia();
     })

   };

  


  
  getTotalPagado(): number {

     this.totalAnio=this.utilidad.forYear.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalAnio);
    return  this.totalAnio;
  }

   getTotalPagadoMes(): number {

     this.totalMes=this.utilidad.forMonth.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalMes);
    return  this.totalMes;
  }

    getTotalPagadoDia(): number {

     this.totalDia=this.utilidad.forDay.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalDia);
    return  this.totalDia;
  }

   

}

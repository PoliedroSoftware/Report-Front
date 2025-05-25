import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Ventas} from './ventas';
//import { HEROES } from './mock-heroes';
import { VentasService } from './ventas.service';


@Component({
  selector: 'app-ventas',
  imports: [CommonModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  
   
       utilidades: Array<any>=[];
       miArray: any[][] = [];
       valor1:any=1
       valor2:any=2;
       arrayPages:[]=[];
       ventas: any;
       totalAnio:any;
       totalMes:any;
       totalDia:any;
  
    constructor(private ventasService: VentasService) { }
   
    ngOnInit() {
      // Agrupar data2 por año y mes
      this.getVentaService(1,10); 
     }

     getVentaService(valor1:any, valor2:any): void {
          this.ventasService.getVentas(valor1, valor2).subscribe(response => {
          this.ventas = response;
      
        
        })
     };
}

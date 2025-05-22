import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VentasMedios } from './ventas-medios';
//import { HEROES } from './mock-heroes';
import { VentasMediosService } from './ventas-medios.service';

@Component({
  selector: 'app-ventas-medios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas-medios.component.html',
  styleUrl: './ventas-medios.component.css'
})
export class VentasMediosComponent implements OnInit {

     utilidades: Array<any>=[];
     miArray: any[][] = [];
 
      valor1:any=1
      valor2:any=2;
      arrayPages:[]=[];
     
      ventas_medios: any;
      totalAnio:any;
      totalMes:any;
      totalDia:any;


 
 


  constructor(private ventasMediosService: VentasMediosService) { }
 
  ngOnInit() {
    // Agrupar data2 por año y mes
   
    this.myservice(); 
   
  }


     myservice(): void {
        this.ventasMediosService.getVentasMedios().subscribe(response => {
        this.ventas_medios = response;
        console.log(this.ventas_medios);
        this.getTotalPagado()
        this.getTotalPagadoMes();
        this.getTotalPagadoDia();
     })

   };

  


  
  getTotalPagado(): number {

     this.totalAnio=this.ventas_medios.forYear.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalAnio);
    return  this.totalAnio;
  }

   getTotalPagadoMes(): number {

     this.totalMes=this.ventas_medios.forMonth.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalMes);
    return  this.totalMes;
  }

    getTotalPagadoDia(): number {

     this.totalDia=this.ventas_medios.forDay.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
    console.log(this.totalDia);
    return  this.totalDia;
  }

   

}


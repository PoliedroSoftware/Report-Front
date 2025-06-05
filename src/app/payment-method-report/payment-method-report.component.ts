import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentMethodReport } from './payment-method-report';
//import { HEROES } from './mock-heroes';
import { PaymentMethodService } from './payment-method.service';

@Component({
  selector: 'app-ventas-medios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-method-report.component.html',
  styleUrl: './payment-method-report.component.css'
})
export class PaymentMethodComponent implements OnInit {

     utilidades: Array<any>=[];
     miArray: any[][] = [];
 
      valor1:any=1
      valor2:any=2;
      arrayPages:[]=[];
     
      ventas_medios: any;
      totalAnio:any;
      totalMes:any;
      totalDia:any;


 
 


  constructor(private ventasMediosService: PaymentMethodService) { }
 
  ngOnInit() {
    // Agrupar data2 por año y mes
   
    this.getVentasMediosService(1,10); 
   
  }

        getVentasMediosService(valor1:any, valor2:any): void {
        this.ventasMediosService.getVentasMedios(valor1, valor2).subscribe(response => {
        this.ventas_medios = response;
       
         this.getTotalPagado()
         this.getTotalPagadoMes();
         this.getTotalPagadoDia();
     })

   };

  


  
  getTotalPagado(): number {

     this.totalAnio=this.ventas_medios.forYear.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
     
     return  this.totalAnio;
  }


  getTotalPagadoMes(): number {

     this.totalMes=this.ventas_medios.forMonth.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
     return  this.totalMes;

  }

    getTotalPagadoDia(): number {
    
      this.totalDia=this.ventas_medios.forDay.reduce((acc:any, curr:any) => acc + curr.totalPaid, 0);
      return  this.totalDia;


  }

}


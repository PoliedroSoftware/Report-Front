import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProveedoresService  } from './proveedores.service';

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

     proveedores: Array<any>=[];
     miArray: any[][] = [];
 
      valor1:any=1
      valor2:any=2;
      arrayPages:[]=[];
     
      ventas_medios: any;
      totalAnio:any;
      totalMes:any;
      totalDia:any;


 
 


  constructor(private proveedoresService: ProveedoresService) { }
 
  ngOnInit() {
    // Agrupar data2 por año y mes
   
    this.getProveedorService(1,10); 
   
  }


       
   getProveedorService(valor1:any, valor2:any):void {
      
        this.proveedores=[];
        this.proveedoresService.getProveedores(valor1, valor2).subscribe(result =>{
        result.forEach(dato => this.proveedores.push(dato));

      
   
      })
    };


}

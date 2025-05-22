import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';

import { Inventarios } from '../inventory';
//import { HEROES } from './mock-heroes';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {

  inventarios: Array<Inventarios>=[];
  valor1:any=1
  valor2:any=2;
  arrayPages:[]=[];
  Resultados:number=0;
 
  constructor(private inventoryService: InventoryService) { }

   ngOnInit(): void {
   this.recuperarPorpagina(1, 10)
  
}
  
recuperarTodos():void {
    this.inventarios=[];
      this.inventoryService.getInventario().subscribe(result =>{
        result.forEach(nombre => this.inventarios.push(nombre));
        console.log(this.inventarios);
        console.log(this.inventarios.length);
        this.Resultados=this.inventarios.length/4;
        console.log(this.Resultados);
      

     })
    };

   



    recuperarPorpagina(valor3:any, valor4:any):void {
      alert(77777777);
    this.inventarios=[];
      this.inventoryService.getInventarioP(valor3, valor4).subscribe(result =>{
        result.forEach(nombre => this.inventarios.push(nombre));
        console.log(this.inventarios);
        console.log(this.inventarios.length);
        this.Resultados=this.inventarios.length/4;
        console.log(this.Resultados);
      

     })
    };

  


 

     
}




import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, of } from 'rxjs';

import { Inventarios } from './inventory';
//import { HEROES } from './mock-heroes';
import { InventoryService } from './inventory.service';

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

   recuperarPorpagina(valor1:any, valor2:any):void {
      
        this.inventarios=[];
        this.inventoryService.getInventarioP(valor1, valor2).subscribe(result =>{
        result.forEach(dato => this.inventarios.push(dato));
   
    })
    };
}




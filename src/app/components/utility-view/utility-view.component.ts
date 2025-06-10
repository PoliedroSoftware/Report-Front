import { Injectable } from '@angular/core';
import { Utility } from './utility';
import { UtilityService } from '@services/utility.service';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@environments/environment';

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
    
    valor1:any=1
    valor2:any=2;
    arrayPages:[]=[];
    Resultados:number=0;
    varPaginacion:any=environment.paginationVar;

    constructor(private utilityService: UtilityService ) { }

      ngOnInit() {
      // Agrupar data2 por año y mes
        this.getUtility(1,this.varPaginacion); 
      
     }

   // Ejemplo. Luego se debe reemplazar estos datos por los que se obtengan de la API. Traer los datos desde la tabla.
 

      getUtility(valor1:any, valor2:any): void {
        this.utilityService.getUtility(valor1, valor2).subscribe(response => {
        this.utility = response;
        
        
     })}


    
 }
